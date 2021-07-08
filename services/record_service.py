from app import db
from db.models.interval_model import Interval
from db.models.record_model import Record
from db.models.sector_model import Sector
from dateutil import parser
import random


class RecordService:
    @staticmethod
    def add_record(title, record, user):
        possible_sectors = Sector.get(title=title)
        cur_sector = None

        for sector in possible_sectors:
            for user_sector in user.sectors:
                if sector.id == user_sector.id:
                    cur_sector = sector

        if not cur_sector:
            sector_id = random.randint(0, 100000000)
            cur_sector = Sector(id=sector_id, title=title, user_id=user.id)
            db.session.add(cur_sector)

        record_id = random.randint(0, 100000000)
        record = Record(id=record_id,
                        text=record['text'],
                        executionPlanTime=record['executionPlanTime'],
                        sector_id=cur_sector.id)

        db.session.add(record)
        db.session.commit()
        return record_id, cur_sector.id

    @staticmethod
    def get_sectors(user_id):
        sectors_data = Sector.get(user_id=user_id)
        return list(map(Sector.from_data, sectors_data))

    @staticmethod
    def update_record(record):
        record_data = Record.get(record['id'])
        record_data.text = record['text']
        record_data.executionDate = parser.parse(record['executionDate'])
        record_data.executionPlanTime = record['executionPlanTime']
        RecordService.update_intervals(record_data, record['executionIntervals'])
        db.session.commit()

    @staticmethod
    def update_intervals(record, intervals):
        for interval_data in record.executionIntervals:
            db.session.delete(interval_data)
        for interval in intervals:
            interval_data = Interval(id=random.randint(0, 100000000),
                                     start=parser.parse(interval['start']),
                                     end=parser.parse(interval['end'])
                                     if ('end' in interval and interval['end']) else None,
                                     record_id=record.id)
            db.session.add(interval_data)

    @staticmethod
    def delete_record(id):
        record = Record.get(id=id)
        db.session.delete(record)
        db.session.commit()

    @staticmethod
    def delete_sector(id):
        sector = Sector.get(id=id)
        db.session.delete(sector)
        db.session.commit()
