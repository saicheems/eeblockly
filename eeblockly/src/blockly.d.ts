declare namespace Blockly {
  function defineBlocksWithJsonArray(jsonArray: object[]): void;
  function inject(
    container: Element | string,
    opt_options?: object
  ): Blockly.Workspace;
  function svgResize(workspace: Blockly.Workspace): void;
  class Block {
    type: string;
  }
  class Flyout {
    CORNER_RADIUS: number;
  }
  class Options {}
  class Workspace {
    getTopBlocks(ordered: boolean): Blockly.Block[];
  }
  class WorkspaceSvg extends Blockly.Workspace {
    getFlyout_(): Blockly.Flyout;
  }
}
declare module Blockly.Options {
  function parseToolboxTree(tree: Node | string): Node;
}
declare module Blockly.Workspace {}
