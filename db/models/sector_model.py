from app import db
from db.models.record_model import Record


class Sector(db.Model):
    __tablename__ = 'sectors'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(70), nullable=False)
    records = db.relationship('Record', backref='sectors')
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
