from eeblockly import app
import json


# A special set of blocks corresponding to fundamental types. If a user wanted
# to, for example, include a specific number in a computation, they must
# construct the "Number" block below, which is an "ee.Number".
# Otherwise, this is useful for casting in places where specific type
# information is lost (e.g.  "Element" to "Image").
TYPE_BLOCKS = {
    "Output": {
        "message0": "Print %1",
        "type": "Print",
        "args0": [{"type": "input_value", "name": "value"}],
        "colour": hash("Number") % 360,
    },
    # ee.Number.
    "Number": {
        "message0": "%1",
        "type": "Number",
        "args0": [{"type": "field_number", "name": "value", "value": 0}],
        "output": "Number",
        "colour": hash("Number") % 360,
    },
    # ee.String.
    "String": {
        "message0": "%1",
        "type": "String",
        "args0": [{"type": "field_input", "name": "value", "text": "text"}],
        "output": "String",
        "colour": hash("String") % 360,
    },
}

# Algorithm groups.
GROUPS = ["Number", "String", "Output"]


def generate_groups():
    groups = {key: {} for key in GROUPS}
    for group, block in TYPE_BLOCKS.items():
        groups[group][block["type"]] = block
    return groups
