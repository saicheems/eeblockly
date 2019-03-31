/// <reference path="blockly.d.ts" />

interface Expression {
  result: string;
  values: Map<ValueNode>;
}

interface ValueNode {
  constantValue?: any;
  functionInvocationValue?: FunctionInvocation;
}

interface FunctionInvocation {
  arguments?: Map<ValueNode>;
  functionName?: string;
}

interface Map<T> {
  [key: string]: T;
}

export function expression(block: Blockly.Block): Expression {
  return {
    values: { "0": valueNode(block) },
    result: "0"
  };
}

function valueNode(block: Blockly.Block): ValueNode {
  switch (block.type) {
    case "Number":
      return { constantValue: +block.getFieldValue("value") };
    case "String":
      return { constantValue: block.getFieldValue("value") };
    default:
      return { functionInvocationValue: functionInvocation(block) };
  }
}

function functionInvocation(block: Blockly.Block): FunctionInvocation {
  let node: FunctionInvocation = {
    functionName: block.type,
    arguments: {}
  };
  for (let i = 1; i < block.inputList.length; i++) {
    let input = block.inputList[i];
    node.arguments[input.name] = valueNode(input.connection.targetBlock());
  }
  return node;
}
