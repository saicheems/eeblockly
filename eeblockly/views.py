from eeblockly import app
from eeblockly.generator import generate_groups
from flask import jsonify, render_template, request
from google.auth.transport.requests import AuthorizedSession
from google.oauth2 import service_account

import json

ALGORITHMS = None
with open(app.config["ALGORITHMS_PATH"]) as f:
    ALGORITHMS = json.load(f)["algorithms"]

SERVICE_ACCOUNT_KEY_PATH = app.config["SERVICE_ACCOUNT_KEY_PATH"]

creds = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_KEY_PATH)
creds = creds.with_scopes(["https://www.googleapis.com/auth/earthengine.readonly"])
authed_session = AuthorizedSession(creds)


@app.route("/")
def index():
    groups = generate_groups()
    return render_template("index.html", groups=groups, json=json)


@app.route("/v1/value:compute", methods=["POST"])
def compute_value():
    response = authed_session.post(
        "https://earthengine.googleapis.com/v1/value:compute",
        data=request.data,
        stream=True,
    )
    print(response)
    return jsonify(response.json())
