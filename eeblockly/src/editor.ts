/// <reference path="blockly.d.ts" />
/// <reference path="googlemaps.d.ts" />

import build = require("./build");
import console_ = require("./console");
import eeApi = require("./ee_api");
import eeBlocks = require("./ee_blocks");
import map = require("./map");

const workspace = init();
const runButton = document.getElementById("run-button");

var computationId: string;

runButton.onclick = function(e: MouseEvent): void {
  let thisComputationId = Math.random().toString(36);
  computationId = thisComputationId;

  console_.clearEntries();
  map.clearLayers();

  let topBlocks = getTopBlocks();
  let layerCount = 0;

  var chain = Promise.resolve();
  for (let block of topBlocks) {
    if (block.type == "Print") {
      let expression = build.expression(block.getInputTargetBlock("value"));
      let entry = console_.addEntry("Computing...");
      eeApi
        .computeValue(expression)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          entry.setText(JSON.stringify(json.result));
        });
    } else if (block.type == "Map.addLayer") {
      layerCount++;
      let expression = build.expression(block.getInputTargetBlock("value"));
      map.addLayer(
        () =>
          new Promise(resolve =>
            eeApi
              .createMap(expression)
              .then(response => response.json())
              .then(json => {
                let base = `http://localhost:5000/v1/${json.name}/tiles/`;
                let imageMapType = new google.maps.ImageMapType({
                  getTileUrl: function(coord, zoom) {
                    return base + `${zoom}/${coord.x}/${coord.y}`;
                  },
                  tileSize: new google.maps.Size(256, 256)
                });
                resolve(imageMapType);
              })
          )
      );
    }
  }
};

function getTopBlocks(): Blockly.Block[] {
  return workspace.getTopBlocks(true);
}

function init(): Blockly.Workspace {
  Blockly.defineBlocksWithJsonArray(eeBlocks.BLOCKS);

  let blocklyArea = document.getElementById("blockly-area");
  let blocklyDiv = document.getElementById("blockly-div");
  let workspace = <Blockly.WorkspaceSvg>Blockly.inject(blocklyDiv, {
    toolbox: Blockly.Options.parseToolboxTree(eeBlocks.TOOLBOX_XML)
  });
  function onresize() {
    let element: any = blocklyArea;
    let x = 0;
    let y = 0;
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
  }
  (<HTMLIFrameElement>blocklyArea).contentWindow.addEventListener(
    "resize",
    onresize,
    false
  );
  onresize();
  Blockly.svgResize(workspace);
  workspace.getFlyout_().CORNER_RADIUS = 0;

  return workspace;
}
