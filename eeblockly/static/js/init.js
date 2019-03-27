Split(['#left-pane', '#right-pane'], {
  direction: 'horizontal',
  cursor: 'col-resize',
  gutterSize: 24,
  onDrag: function() {
    map.resize();
  }
});

Split(['#blockly-area', '#console'], {
  direction: 'vertical',
  cursor: 'row-resize',
  gutterSize: 24,
  sizes: [60, 40]
});

mapboxgl.accessToken = 'pk.eyJ1Ijoic2tpcmFuYyIsImEiOiJjanRuNHhpdXgwZGU1M3lwNXZpNTIzZ2RwIn0.RyfnfyVjNalmeLeB7syt9g';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [0, 0],
  zoom: 9
});

var blocklyArea = document.getElementById('blockly-area');
var blocklyDiv = document.getElementById('blockly-div');
var workspace = Blockly.inject(blocklyDiv, {toolbox: document.getElementById('toolbox')});
var onResize = function(e) {
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
blocklyArea.contentWindow.addEventListener('resize', onResize, false);
onResize();
Blockly.svgResize(workspace);
