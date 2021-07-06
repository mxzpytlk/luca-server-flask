from db.models.user_model import User
from flask import request, make_response

from app import app, db
from services.passchanger_service import PassChangerService

PASSCHANGE_PATH = 'api/auth/change/pass'


@app.post(f'{PASSCHANGE_PATH}')
def change_password():

    old_password = request.args.get('oldPass')
    new_password = request.args.get('newPass')
    id = request.headers.get('Authorization')

    password = PassChangerService.check_pass(new_password, old_password)
    if password != 0:
        return PassChangerService.change_pass(id, password)