from db.models.user_model import User
from flask import request, make_response

from app import app, db
from services.auth_service import AuthService


@app.post('/api/auth/register')
def register_route():
    name = request.args.get('name')
    password = request.args.get('pass')
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
    if User.query.filter(User.name == name).count() > 0:
        res = make_response({
            'message': 'This user already exists'
        })
        res.status_code = 400
        return res
    AuthService.register(name, password)
    return ''
