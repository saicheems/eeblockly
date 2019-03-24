from eeblockly import app


@app.route("/")
def index():
    return "Hello world!"
