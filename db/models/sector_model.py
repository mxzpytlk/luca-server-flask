from app import db
from db.models.record_model import Record


class Sector(db.Model):
    __tablename__ = 'sectors'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(70), nullable=False)
    records = db.relationship('Record', backref='sector')
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    @staticmethod
    def get(title=None, user_id=None, id=None):
        if title:
            return Sector.query.filter(Sector.title == title).all()
        if user_id:
            return Sector.query.filter(Sector.user_id == user_id).all()
        if id:
            return Sector.query.filter(Sector.id == id).first()

    @staticmethod
    def from_data(sector_data):
        return {
            'title': sector_data.title,
            'id': sector_data.id,
            'records': list(map(Record.from_data, sector_data.records))
        }
