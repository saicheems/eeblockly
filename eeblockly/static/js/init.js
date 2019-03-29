Split(["#left-pane", "#right-pane"], {
  direction: "horizontal",
  cursor: "col-resize",
  gutterSize: 24
});

Split(["#editor", "#console"], {
  direction: "vertical",
  cursor: "row-resize",
  gutterSize: 24,
  sizes: [60, 40]
});

function LayerControl(controlDiv, map) {
  var ul = document.createElement("ul");
  ul.setAttribute("class", "mdc-list mdc-list--dense");
  ul.setAttribute("role", "group");
  ul.style.backgroundColor = "#fff";
  ul.style.margin = "8px";
  ul.style.borderRadius = "2px";
  controlDiv.appendChild(ul);
}

var layerControlDiv = document.createElement('div');
var layerControl = new LayerControl(layerControlDiv, map);
var layerControlUl = layerControlDiv.firstChild;

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 2,
    disableDefaultUI: true
  });

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(layerControlDiv);
}

var blocklyArea = document.getElementById("blockly-area");
var blocklyDiv = document.getElementById("blockly-div");
var workspace = Blockly.inject(blocklyDiv, {toolbox: document.getElementById("toolbox")});
var onresize = function(e) {
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + "px";
  blocklyDiv.style.top = y + "px";
  blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
  blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
  Blockly.svgResize(workspace);
};
blocklyArea.contentWindow.addEventListener("resize", onresize, false);
onresize();
Blockly.svgResize(workspace);
workspace.getFlyout_().CORNER_RADIUS = 0;
