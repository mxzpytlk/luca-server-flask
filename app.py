import flask
from flask import Flask, request, make_response
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///luca.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), primary_key=True, nullable=False)
    password = db.Column(db.String(300), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)

    # sectors = db.relationship('Sector')

    def __repr__(self):
        return '<User %r>' % self.id

@app.post('/api/auth/register')
def register_route():
    name = request.args.get('name')
    password = request.args.get('pass')
    if not name:
        res = make_response({
            'message': 'Name can not be empty'
        })
        res.status_code = 400
        return res
    if not password:
        res = make_response({
            'message': 'Password can not be empty'
        })
        res.status_code = 400
        return res
    if User.query.filter(User.name == name).count() > 0:
        res = make_response({
            'message': 'This user already exists'
        })
        res.status_code = 400
        return res

    id = User.query.count()
    user = User(name=name, password=password, id=id)
    db.session.add(user)
    db.session.commit()
    return ''


@app.route('/')
def static_route():
    return flask.render_template('index.html')

