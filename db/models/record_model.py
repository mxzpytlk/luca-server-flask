from app import db
from db.models.interval_model import Interval


class Record(db.Model):
    __tablename__ = 'records'

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text)
    executionDate = db.Column(db.DateTime)
    executionPlanTime = db.Column(db.Float, nullable=False)
    executionIntervals = db.relationship('Interval', backref='record')
    sector_id = db.Column(db.Integer, db.ForeignKey('sectors.id'))

