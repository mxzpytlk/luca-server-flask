import flask

# Сюда импортировать все роуты приложения
from app import app
from controllers.routes.auth_route import *
from controllers.routes.record_router import *


@app.route('/')
def static_route():
    return flask.render_template('index.html')
