from eeblockly import app
import json


# A set of blocks for output.
SPECIAL_BLOCKS = [
    {
        "message0": "Print %1",
        "type": "Print",
        "args0": [{"type": "input_value", "name": "value"}],
        "colour": hash("Number") % 360,
    }
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
ALGORITHM_GROUPS = ["Number", "String"]


def generate_special_groups():
    groups = {}
    for block in SPECIAL_BLOCKS:
        type = block["type"]
        group = type.split(".")[0]
        if group not in groups:
            groups[group] = {}
        groups[group][type] = block
    return groups


def generate_algorithm_groups():
    groups = {key: {} for key in ALGORITHM_GROUPS}
    for block in TYPE_BLOCKS:
        type = block["type"]
        groups[type][type] = block
    return groups
