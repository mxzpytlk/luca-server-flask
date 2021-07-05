import flask

# Сюда импортировать все роуты приложения

from controllers.routes.auth_route import *


@app.route('/')
def static_route():
    return flask.render_template('index.html')
