/// <reference path="blockly.d.ts" />

import console_ = require("./console");
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
      //var expression = build.expression(block.connection.targetBlock);
      console.log("Print!");
    } else if (block.type == "Map.addLayer") {
      layerCount++;
      map.addLayer(
        () =>
          new Promise(resolve =>
            setTimeout(() => {
              console.log("Done!");
              resolve();
            }, 500)
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
