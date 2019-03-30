import _ = require("./algorithms.json");
const ALGORITHMS: Algorithm[] = _["algorithms"];

interface Algorithm {
  arguments: AlgorithmArgument[];
  name: string;
  returnType: string;
}

interface AlgorithmArgument {
  argumentName: string;
  defaultValue?: string;
  type: string;
}

interface Block {
  args0: BlockArgument[];
  message0: string;
  output?: string;
  type: string;
}

interface BlockArgument {
  check?: string;
  defaultValue?: string;
  name?: string;
  text?: string;
  type: string;
  value?: any;
}

interface Map<T> {
  [key: string]: T;
}

const TYPE_MAP: { [key: string]: string } = {
  "Image<unknown bands>": "Image",
  Long: "Number",
  Number: "Number",
  String: "String",
  Object: <string>null
};

const SPECIAL_BLOCKS: Block[] = [
  {
    message0: "Map.addLayer %1",
    type: "Map.addLayer",
    args0: [{ type: "input_value", name: "object" }]
  },
  {
    message0: "Print %1",
    type: "Print",
    args0: [{ type: "input_value", name: "value" }]
  }
];

const TYPE_BLOCKS: Block[] = [
  {
    message0: "%1",
    type: "Number",
    args0: [{ type: "field_number", name: "value", value: 0 }],
    output: "Number"
  },
  {
    message0: "%1",
    type: "String",
    args0: [{ type: "field_input", name: "value", text: "text" }],
    output: "String"
  }
];

const ALGORITHM_GROUP_NAMES = ["Image", "Number", "String"];

const SPECIAL_GROUPS = generateSpecialGroups();
const ALGORITHM_GROUPS = generateAlgorithmGroups();

export const BLOCKS = generateBlocks();
export const TOOLBOX_XML = generateToolboxXml();

function generateBlocks(): Block[] {
  let blocks = [];
  for (let groups of [SPECIAL_GROUPS, ALGORITHM_GROUPS]) {
    for (let group in groups) {
      for (let type in groups[group]) {
        blocks.push(groups[group][type]);
      }
    }
  }
  return blocks;
}

function generateToolboxXml(): string {
  let xml = "<xml>";
  for (let groups of [SPECIAL_GROUPS, ALGORITHM_GROUPS]) {
    for (let group in groups) {
      xml += `<category name="${group}">`;
      for (let type in groups[group]) {
        let block = groups[group][type];
        xml += `<block type="${type}">`;
        for (let argument of block.args0) {
          if ("defaultValue" in argument) {
            xml += `<value name="${argument.name}">`;
            if (argument.check == "Number") {
              xml += '<shadow type="Number">';
              xml += `<field name="value">${argument.defaultValue}</field>`;
              xml += "</shadow>";
            }
            xml += "</value>";
          }
        }
        xml += "</block>";
      }
      xml += "</category>";
    }
    xml += "<sep></sep>";
  }
  xml += "</xml>";
  return xml;
}

function generateSpecialGroups(): Map<Map<Block>> {
  let groups: Map<Map<Block>> = {};
  for (let block of SPECIAL_BLOCKS) {
    let type = block.type;
    let group = type.split(".")[0];
    if (ALGORITHM_GROUP_NAMES.indexOf(group) == -1) {
      groups[group] = {};
    }
    groups[group][type] = block;
  }
  return groups;
}

function generateAlgorithmGroups(): Map<Map<Block>> {
  let groups: Map<Map<Block>> = {};
  for (let group of ALGORITHM_GROUP_NAMES) {
    groups[group] = {};
  }
  for (let block of TYPE_BLOCKS) {
    let type = block.type;
    groups[type][type] = block;
  }
  for (let algorithm of ALGORITHMS) {
    if (algorithm.name == "algorithms/Image.constant") {
      groups["Image"]["Image.constant"] = generateBlock(algorithm);
    } else if (algorithm.name == "algorithms/Image.load") {
      groups["Image"]["Image.load"] = generateBlock(algorithm);
    }
  }
  return groups;
}

export function generateBlock(algorithm: Algorithm): Block {
  let id = algorithmId(algorithm);
  let block: Block = {
    args0: [{ type: "input_dummy" }],
    message0: `${id} %1 `,
    type: id
  };
  for (let i in algorithm.arguments) {
    let argument = algorithm.arguments[i];
    let argumentName = argument.argumentName;
    let a: BlockArgument = {
      check: TYPE_MAP[argument.type],
      name: argumentName,
      type: "input_value"
    };
    if ("defaultValue" in argument) {
      a.defaultValue = argument.defaultValue;
    }
    block.args0.push(a);
    block.message0 += `${argumentName} %${+i + 2} `;
  }

  block.message0 = block.message0.trim();
  block.output = TYPE_MAP[algorithm.returnType];
  return block;
}

function algorithmId(algorithm: Algorithm): string {
  return algorithm.name.split("/")[1];
}
