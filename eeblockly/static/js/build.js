var buildFunctionInvocation = function(block) {
  var node = {
    "functionName": block.type,
    "arguments": {}
  };
  for (var i = 1; i < block.inputList.length; i++) {
    var b = block.inputList[i];
    node.arguments[b.name] = buildValueNode(b.connection.targetBlock());
  }
  return node;
}

var buildValueNode = function(block) {
  if (block.type == "Number") {
    return {"constantValue": Number(block.getFieldValue("value"))};
  } else if (block.type == "String") {
    return {"constantValue": block.getFieldValue("value")};
  } else {
    return {"functionInvocationValue": buildFunctionInvocation(block)};
  }
};

var buildExpression = function(block) {
  return {
    "values": {"0": buildValueNode(block)},
    "result": "0"
  };
};
