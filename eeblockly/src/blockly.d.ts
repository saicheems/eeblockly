declare namespace Blockly {
  function defineBlocksWithJsonArray(jsonArray: object[]): void;
  function inject(
    container: Element | string,
    opt_options?: object
  ): Blockly.Workspace;
  function svgResize(workspace: Blockly.Workspace): void;

  class Block {
    inputList: Blockly.Input[];
    type: string;
    getFieldValue(name: string): string | undefined;
    getInputTargetBlock(name: string): Blockly.Block | undefined;
  }
  class Connection {
    targetBlock(): Blockly.Block | undefined;
  }
  class Flyout {
    CORNER_RADIUS: number;
  }
  class Input {
    name: string;
    connection?: Blockly.Connection;
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
  function parseToolboxTree(tree: Node | string): Node | undefined;
}
declare module Blockly.Workspace {}
