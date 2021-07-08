from app import db
from db.models.sector_model import Sector


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), primary_key=True, nullable=False)
    password = db.Column(db.String(300), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)
    sectors = db.relationship('Sector', backref='user')

    def __repr__(self):
        return '<User %r>' % self.id

    @staticmethod
    def get(name=None, id=None):
        if name:
            return User.query.filter(User.name == name).first()
        if id:
            return User.query.filter(User.id == id).first()
