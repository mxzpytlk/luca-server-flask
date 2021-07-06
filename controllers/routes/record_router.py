from app import app
from flask import request, make_response
import json

from db.models.user_model import User
from services.record_service import RecordService

RECORD_PATH = '/api/record'


@app.post(f'{RECORD_PATH}/add')
def add_record():
    id = request.headers.get('Authorization')
    user = User.get(id=id)
    if not user:
        res = make_response()
        res.status_code = 401
        return res
    sector_title = request.args.get('title')
    record = json.loads(request.args.get('record'))
    record_id, sector_id = RecordService.add_record(sector_title, record, user)
    return {
        'recordId': record_id,
        'sectorId': sector_id
    }


@app.get(f'{RECORD_PATH}/')
def get_sectors():
    id = request.headers.get('Authorization')
    user = User.get(id=id)
    if not user:
        res = make_response()
        res.status_code = 401
        return res
    return {
        'sectors': RecordService.get_sectors(user)
    }
