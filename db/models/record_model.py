from app import db
from db.models.interval_model import Interval


class Record(db.Model):
    __tablename__ = 'records'

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text)
    executionDate = db.Column(db.DateTime)
    executionPlanTime = db.Column(db.Integer, nullable=False)
    executionIntervals = db.relationship('Interval', backref='records')
    sector_id = db.Column(db.Integer, db.ForeignKey('sectors.id'))

