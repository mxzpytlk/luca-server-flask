from flask import make_response

from app import db
from db.models.user_model import User


class AuthService:
    @staticmethod
    def register(name, password):
        id = User.query.count()
        user = User(name=name, password=password, id=id)
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
            'id': user.id
        }
