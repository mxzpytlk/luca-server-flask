from app import db
from db.models.record_model import Record
from db.models.sector_model import Sector


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
            sector_id = Sector.query.count() + 1
            cur_sector = Sector(id=sector_id, title=title, user_id=user.id)
            db.session.add(cur_sector)

        record_id = Record.query.count() + 1
        record = Record(id=record_id,
                        text=record['text'],
                        executionPlanTime=record['executionPlanTime'],
                        sector_id=cur_sector.id)

        db.session.add(record)
        db.session.commit()
        return record_id, cur_sector.id

