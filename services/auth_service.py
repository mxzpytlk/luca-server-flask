from app import db
from db.models.user_model import User


class AuthService:
    @staticmethod
    def register(name, password):
        id = User.query.count()
        user = User(name=name, password=password, id=id)
        db.session.add(user)
        db.session.commit()
