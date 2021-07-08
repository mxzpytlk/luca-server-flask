from app import db
from datetime import datetime
from dateutil import parser


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

    @staticmethod
    def from_iso(interval):
        return {
            'start': parser.parse(interval['start']),
            'end': parser.parse(interval['end']) if 'end' in interval else None
        }


