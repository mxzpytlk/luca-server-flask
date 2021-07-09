from flask import request, make_response

from app import app
from db.models.user_model import User
from services.admin_service import AdminService

ADMIN_PATH = '/api/admin'


@app.get(f'{ADMIN_PATH}/users')
def get_all_users():
    id = request.headers.get('Authorization')
    user = User.get(id=id)
    if not user.is_admin:
        res = make_response()
        res.status_code = 400
        return res
    return {
        'users': list(AdminService.get_all_users())
    }


@app.delete(f'{ADMIN_PATH}/delete-user')
def delete_user():
    id = request.headers.get('Authorization')
    user = User.get(id=id)
    if not user.is_admin:
        res = make_response()
        res.status_code = 400
        return res
    user_id = request.args.get('id')
    AdminService.delete_user(user_id)

    return user_id
