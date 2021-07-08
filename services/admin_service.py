from db.models.user_model import User


class AdminService:
    @staticmethod
    def get_all_users():
        users = map(User.from_data, User.query.all())
        return filter(lambda user: not user['is_admin'], users)
