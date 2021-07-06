from app import db
from datetime import datetime


class Interval(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    start = db.Column(db.DateTime, default=datetime.utcnow)
    end = db.Column(db.DateTime)
    record_id = db.Column(db.Integer, db.ForeignKey('records.id'))

    @staticmethod
    def from_data(interval_data):
        return {
            'start': interval_data.start,
            'end': interval_data.end
        }
