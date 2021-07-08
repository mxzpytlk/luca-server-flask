import flask

# Сюда импортировать все роуты приложения
from app import app
from controllers.routes.auth_route import login, register_route, change_password
from controllers.routes.record_router import add_record, get_sectors, update_record, delete_record,delete_sector
from controllers.routes.admin_route import get_all_users


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
@app.route('/static//main/admin')
@app.route('/static/main/admin/acount')
@app.route('/static/main/acount')
def static_route(id=None):
    return flask.render_template('index.html')
