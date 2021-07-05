from app import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), primary_key=True, nullable=False)
    password = db.Column(db.String(300), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)

    # sectors = db.relationship('Sector')

    def __repr__(self):
        return '<User %r>' % self.id