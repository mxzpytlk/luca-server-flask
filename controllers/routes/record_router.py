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
    if user.is_admin and request.args.get('userId'):
        id = request.args.get('userId')
    return {
        'sectors': RecordService.get_sectors(id)
    }


@app.post(f'{RECORD_PATH}/update/')
def update_record():
    id = request.headers.get('Authorization')
    user = User.get(id=id)
    if not user:
        res = make_response()
        res.status_code = 401
        return res

    for record in request.args.getlist('records[]'):
        RecordService.update_record(json.loads(record))

    return ''


@app.delete(f'{RECORD_PATH}/delete/record')
def delete_record():
    id = request.headers.get('Authorization')
    user = User.get(id=id)
    if not user:
        res = make_response()
        res.status_code = 401
        return res
    record_id = request.args.get('id')
    RecordService.delete_record(record_id)

    return ''


@app.delete(f'{RECORD_PATH}/delete/sector')
def delete_sector():
    id = request.headers.get('Authorization')
    user = User.get(id=id)
    if not user:
        res = make_response()
        res.status_code = 401
        return res
    sector_ids = request.args.getlist('removeIds[]')
    for sector_id in sector_ids:
        RecordService.delete_sector(sector_id)

    return ''
