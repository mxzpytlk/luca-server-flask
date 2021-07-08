from db.models.user_model import User
from flask import request, make_response

from app import app
from services.auth_service import AuthService
from services.passchanger_service import PassChangerService

AUTH_PATH = '/api/auth'


def check_auth(name, password):
    if not name:
        res = make_response({
            'message': 'Name can not be empty'
        })
        res.status_code = 400
        return res
    if not password:
        res = make_response({
            'message': 'Password can not be empty'
        })
        res.status_code = 400
        return res


@app.post(f'{AUTH_PATH}/register')
def register_route():
    name = request.args.get('name')
    password = request.args.get('pass')
    res = check_auth(name, password)
    if res:
        return res
    if User.get(name=name):
        res = make_response({
            'message': 'This user already exists'
        })
        res.status_code = 400
        return res
    AuthService.register(name, password)
    return ''


@app.post(f'{AUTH_PATH}/login')
def login():
    name = request.args.get('name')
    password = request.args.get('pass')
    res = check_auth(name, password)
    if res:
        return res
    return AuthService.login(name, password)


@app.post(f'{AUTH_PATH}/change/pass')
def change_password():

    old_password = request.args.get('oldPass')
    new_password = request.args.get('newPass')
    id = request.headers.get('Authorization')

    res = PassChangerService.check_pass(old_password, id)
    if res:
        return res
    return PassChangerService.change_pass(id, new_password)

