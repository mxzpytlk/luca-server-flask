from flask import make_response

from app import db
from db.models.user_model import User


class PassChangerService:
    @staticmethod
    def change_pass(id, new_password):
        user = User.get(id=id)
        user.password = new_password
        db.session.commit()
        res = make_response({
            'message': 'Password is changed'
        })
        return res

    @staticmethod
    def check_pass(old_password, id):
        user = User.get(id=id)
        if user.password != old_password:
            res = make_response({
                'message': 'Incorrect old password'
            })
            res.status_code = 400
            return res
