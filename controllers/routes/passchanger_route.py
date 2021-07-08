from db.models.user_model import User
from flask import request, make_response

from app import app, db
from services.passchanger_service import PassChangerService

PASSCHANGE_PATH = 'api/auth/change/pass'


