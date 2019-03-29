from flask import Flask

app = Flask(__name__)
app.config.from_pyfile("application.cfg")
app.jinja_env.trim_blocks = True
app.jinja_env.lstrip_blocks = True

import eeblockly.views
