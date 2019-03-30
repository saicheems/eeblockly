declare var google: any;

var map;

(<any>window).initMap = function() {
  (<any>window).initMap = null;
  map = init();
};

function init(): any {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 2,
    disableDefaultUI: true
  });

  var ul = document.createElement("ul");
  ul.setAttribute("class", "mdc-list mdc-list--dense");
  ul.setAttribute("role", "group");
  ul.style.backgroundColor = "#fff";
  ul.style.margin = "8px";
  ul.style.borderRadius = "2px";
  //controlDiv.appendChild(ul);

  //map.controls[google.maps.ControlPosition.TOP_RIGHT].push(layerControlDiv);
  return map;
}
