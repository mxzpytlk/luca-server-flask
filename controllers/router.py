import flask

# Сюда импортировать все роуты приложения
from app import app
from controllers.routes.auth_route import *
from controllers.routes.record_router import *


@app.route('/')
@app.route('/static/auth')
@app.route('/static/register')
@app.route('/static/register')
@app.route('/static/main')
@app.route('/static/main/new')
@app.route('/static/main/delete')
@app.route('/static/main/delete')
@app.route('/static/main/edit/<id>')
@app.route('/static/main/plan')
def static_route(id=None):
    return flask.render_template('index.html')
