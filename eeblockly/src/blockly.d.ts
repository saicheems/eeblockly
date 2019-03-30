declare namespace Blockly {
  function defineBlocksWithJsonArray(jsonArray: object[]): void;
  function inject(
    container: Element | string,
    opt_options?: object
  ): Blockly.Workspace;
  function svgResize(workspace: Blockly.Workspace): void;
  class Block {}
  class Flyout {
    CORNER_RADIUS: number;
  }
  class Options {}
  class Workspace extends Workspace__Class {}
  class Workspace__Class {
    getTopBlocks(ordered: boolean): Blockly.Block[];
  }
  class WorkspaceSvg extends WorkspaceSvg__Class {}
  class WorkspaceSvg__Class extends Blockly.Workspace__Class {
    getFlyout_(): Blockly.Flyout;
  }
}
declare module Blockly.Options {
  function parseToolboxTree(tree: Node | string): Node;
}
declare module Blockly.Workspace {}
