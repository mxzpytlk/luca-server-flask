from app import db
from db.models.user_model import User


class AdminService:
    @staticmethod
    def get_all_users():
        users = map(User.from_data, User.query.all())
        return filter(lambda user: not user['is_admin'], users)

    @staticmethod
    def delete_user(id):
        user = User.get(id=id)
        db.session.delete(user)
        db.session.commit()
