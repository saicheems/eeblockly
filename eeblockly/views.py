from eeblockly import app
from flask import jsonify, render_template, request, send_file
from google.auth.transport.requests import AuthorizedSession
from google.oauth2 import service_account

import json
import io

SERVICE_ACCOUNT_KEY_PATH = app.config["SERVICE_ACCOUNT_KEY_PATH"]

creds = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_KEY_PATH)
creds = creds.with_scopes(["https://www.googleapis.com/auth/earthengine"])
authed_session = AuthorizedSession(creds)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/v1/value:compute", methods=["POST"])
def compute_value():
    response = authed_session.post(
        "https://earthengine.googleapis.com/v1/value:compute",
        data=request.data,
        stream=True,
    )
    return jsonify(response.json())


@app.route("/v1/projects/earthengine-legacy/maps", methods=["POST"])
def create_map():
    response = authed_session.post(
        "https://earthengine.googleapis.com/v1/projects/earthengine-legacy/maps",
        data=request.data,
        stream=True,
    )
    return jsonify(response.json())


@app.route(
    "/v1/projects/earthengine-legacy/maps/<map_id>/tiles/<z>/<x>/<y>", methods=["GET"]
)
def get_tile(map_id, z, x, y):
    response = authed_session.get(
        "https://earthengine.googleapis.com/v1/projects/earthengine-legacy/maps/{}/tiles/{}/{}/{}".format(
            map_id, z, x, y
        ),
        stream=True,
    )
    return send_file(io.BytesIO(response.content), mimetype="image/png")
