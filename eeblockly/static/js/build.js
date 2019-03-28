var buildValueNode = function(block) {
  if (block.type == "Number") {
    return {"constantValue": block.getFieldValue("value")};
  } else if (block.type == "String") {
    return {"constantValue": block.getFieldValue("value")};
  } else {
    throw "Unexpected block type: " + block.type;
  }
};

var buildExpression = function(block) {
  return {
    "values": {"0": buildValueNode(block)},
    "result": "0"
  };
};
