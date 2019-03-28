from eeblockly import app
import json


# A set of blocks for output.
SPECIAL_BLOCKS = [
    {
        "message0": "Map.addLayer %1",
        "type": "Map.addLayer",
        "args0": [{"type": "input_value", "name": "object"}],
        "colour": hash("Map") % 360,
    },
    {
        "message0": "Print %1",
        "type": "Print",
        "args0": [{"type": "input_value", "name": "value"}],
        "colour": hash("Number") % 360,
    },
]

# A set of blocks corresponding to fundamental types. If a user wanted to, for
# example, include a specific number in a computation, they must construct the
# "Number" block below, which is an "ee.Number".
# Otherwise, this is useful for casting in places where specific type
# information is lost (e.g.  "Element" to "Image").
TYPE_BLOCKS = [
    # Number.
    {
        "message0": "%1",
        "type": "Number",
        "args0": [{"type": "field_number", "name": "value", "value": 0}],
        "output": "Number",
        "colour": hash("Number") % 360,
    },
    # String.
    {
        "message0": "%1",
        "type": "String",
        "args0": [{"type": "field_input", "name": "value", "text": "text"}],
        "output": "String",
        "colour": hash("String") % 360,
    },
]

# Algorithm groups.
ALGORITHM_GROUPS = ["Image", "Number", "String"]

# A map from EE types to block types.
TYPE_MAP = {
    "Image<unknown bands>": "Image",
    "Number": "Number",
    "String": "String",
    "Object": None,
}


def generate_special_groups():
    groups = {}
    for block in SPECIAL_BLOCKS:
        type = block["type"]
        group = type.split(".")[0]
        if group not in groups:
            groups[group] = {}
        groups[group][type] = block
    return groups


def generate_algorithm_groups(algorithms):
    groups = {key: {} for key in ALGORITHM_GROUPS}
    for block in TYPE_BLOCKS:
        type = block["type"]
        groups[type][type] = block
    for algorithm in algorithms:
        if algorithm["name"] == "algorithms/Image.constant":
            groups["Image"]["Image.constant"] = generate_block(algorithm)
    return groups


def generate_block(algorithm):
    id = algorithm_id(algorithm)
    block = {"message0": "{} %1 ".format(id), "args0": [{"type": "input_dummy"}]}
    for i, argument in enumerate(algorithm.get("arguments", [])):
        argument_name = argument["argumentName"]
        block["args0"].append(
            {
                "type": "input_value",
                "name": argument_name,
                "check": TYPE_MAP[argument["type"]],
            }
        )
        block["message0"] += "{} %{} ".format(argument_name, i + 2)

    block["message0"] = block["message0"][0:-1]
    block["output"] = TYPE_MAP[algorithm["returnType"]]
    if len(block["output"]) > 1:
        block["colour"] = hash("".join(block["output"])) % 360
    else:
        block["colour"] = hash(block["output"]) % 360
    return block


def algorithm_id(algorithm):
    return algorithm["name"].split("/")[1]  # e.g. 'Image.load'
