from db.models.user_model import User
from flask import request, make_response

from app import app
from services.auth_service import AuthService

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
    user = User.get(name=name)
    if user.password != password:
        res = make_response({
            'message': 'Incorrect password'
        })
        res.status_code = 400
        return res
    return {
        'token': user.id,
        'id': user.id
    }

