/// <reference path="googlemaps.d.ts" />

var map: google.maps.Map;
var layersControlNode: Node;
(<any>window).initMap = function(): void {
  (<any>window).initMap = null;
  map = init();
  layersControlNode = initLayerControl();
};
var layers: Layer[] = [];
var lastLoader: Promise<google.maps.ImageMapType> = Promise.resolve<
  google.maps.ImageMapType
>(1);

export class Layer {
  node: Node;
  checkbox: HTMLInputElement;
  condemned: boolean;
  imageMapType: google.maps.ImageMapType;
  index: number;

  constructor(index: number) {
    var template = document.createElement("template");
    template.innerHTML = `<li class="mdc-list-item" role="checkbox">
  <span class="mdc-list-item__graphic">
    <div class="mdc-checkbox">
      <input type="checkbox"
             class="mdc-checkbox__native-control"
             id="layer-${index}-checkbox"/>
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark"
             viewBox="0 0 24 24">
          <path class="mdc-checkbox__checkmark-path"
                fill="none"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
    </div>
  </span>
  <label class="mdc-list-item__text"
         for="layer-list-checkbox-item-${index}">Layer ${index + 1}</label>
</li>`;
    this.node = template.content.firstChild;
    this.checkbox = template.content.querySelector(`#layer-${index}-checkbox`);
    this.checkbox.onchange = () => toggleLayer(this);
    this.condemned = false;
    this.enable(false);
    this.index = index;
  }

  check(checked: boolean) {
    this.checkbox.checked = checked;
  }

  condemn(): void {
    this.condemned = true;
  }

  enable(enabled: boolean): void {
    this.checkbox.disabled = !enabled;
  }

  load(loader: Promise<google.maps.ImageMapType>): void {
    loader.then(imageMapType => {
      // TODO: If imageMapType is null, set this layer to an error state.
      this.imageMapType = imageMapType;
      this.enable(true);
      this.check(true);
      toggleLayer(this);
    });
  }
}

function init(): google.maps.Map {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 2,
    disableDefaultUI: true
  });
  return map;
}

function initLayerControl(): Node {
  let ul = document.createElement("ul");
  ul.setAttribute("class", "mdc-list mdc-list--dense");
  ul.setAttribute("role", "group");
  ul.style.backgroundColor = "#fff";
  ul.style.margin = "8px";
  ul.style.borderRadius = "2px";

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(ul);
  return ul;
}

export function clearLayers(): void {
  lastLoader.catch(reason => console.warn(reason));
  lastLoader = Promise.resolve<google.maps.ImageMapType>(1);
  while (layersControlNode.firstChild) {
    layersControlNode.removeChild(layersControlNode.firstChild);
  }
  for (let layer of layers) {
    layer.condemn();
  }
  layers = [];
  map.overlayMapTypes.clear();
}

export function addLayer(
  loader: () => Promise<google.maps.ImageMapType>
): Layer {
  let layer = new Layer(layersControlNode.childNodes.length);
  lastLoader = lastLoader
    .then(
      () =>
        new Promise<google.maps.ImageMapType>((resolve, reject) => {
          if (layer.condemned) {
            reject(new Error("Layer was condemned, aborting!!!"));
          }
          resolve(null);
        })
    )
    .then(loader, error => {
      console.warn(error);
      return null;
    });
  layer.load(lastLoader);
  layersControlNode.appendChild(layer.node);
  layers.push(layer);
  return layer;
}

function toggleLayer(layer: Layer) {
  if (layer.condemned) {
    // This can happen if "Run" is clicked twice in succession and a single
    // layer is loaded on each click. The reason is that the loader will toggle
    // the layer when the createMap call returns, and the layer may already be
    // condemned at that point.
    console.warn("Toggled a condemned layer.");
    return;
  }
  if (layer.checkbox.checked) {
    map.overlayMapTypes.setAt(layer.index, layer.imageMapType);
  } else {
    map.overlayMapTypes.setAt(layer.index, null);
  }
}
