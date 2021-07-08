from flask import make_response

from app import db
from db.models.user_model import User


class AuthService:
    @staticmethod
    def register(name, password):
        is_admin = False
        if name == 'admin':
            is_admin = True
        id = User.query.count() + 1
        user = User(name=name, password=password, id=id, is_admin=is_admin)
        db.session.add(user)
        db.session.commit()

    @staticmethod
    def login(name, password):
        user = User.get(name=name)
        if not user:
            res = make_response({
                'message': 'This account does not exist'
            })
            res.status_code = 400
            return res
        if user.password != password:
            res = make_response({
                'message': 'Incorrect password'
            })
            res.status_code = 400
            return res
        return {
            'token': user.id,
            'id': user.id,
            'isAdmin': user.is_admin
        }
