from eeblockly import app
from eeblockly.generator import generate_groups
from flask import render_template

import json

ALGORITHMS = None
with open(app.config["ALGORITHMS_PATH"]) as f:
    ALGORITHMS = json.load(f)["algorithms"]

SERVICE_ACCOUNT_KEY_PATH = app.config["SERVICE_ACCOUNT_KEY_PATH"]


@app.route("/")
def index():
    groups = generate_groups()
    return render_template("index.html", groups=groups, json=json)
