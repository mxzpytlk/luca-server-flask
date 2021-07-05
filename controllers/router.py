import flask

from controllers.routes.auth_route import *


@app.route('/')
def static_route():
    return flask.render_template('index.html')
