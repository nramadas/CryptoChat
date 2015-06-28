import sqlite3

from flask import Flask, render_template, request, jsonify
from flask.ext.socketio import SocketIO, send, emit
from flask.ext.sqlalchemy import SQLAlchemy
from contextlib import closing

DEBUG = True
SECRET_KEY = "secret"
SQLALCHEMY_DATABASE_URI = "sqlite:////tmp/chatclient.db"

app = Flask(__name__)
app.config.from_object(__name__)
socketio = SocketIO(app)
db = SQLAlchemy(app)

class User(db.Model):
    id          = db.Column(db.Integer, primary_key=True)
    username    = db.Column(db.String(80), unique=True)
    password    = db.Column(db.String(120), unique=True)

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __repr__(self):
        return "<User %r>" % self.username

    def save(self):
        db.session.add(self)
        db.session.commit()

    def to_api_dict(self):
        return {
            "id": self.id,
            "username": self.username,
        }

@app.route("/")
def frontpage():
    return render_template("frontpage.html")

@app.route("/user", methods=["POST", "PUT", "DELETE"])
def user():
    if request.method == "POST":
        errors = [];
        username = request.form["username"]
        password = request.form["password"]

        if not username:
            errors.append({
                "field": "username",
                "msg": "I need to know who you are."
            })

        if not password:
            errors.append({
                "field": "password",
                "msg": "You need to provide a password."
            })

        if bool(errors):
            resp = jsonify({"errors": errors})
            resp.status_code = 400
            return resp

        user = User.query.filter_by(username=username).first()
        if user:
            if user.password == password:
                resp = jsonify({"user": user.to_api_dict()})
                resp.status_code = 200
                return resp
            else:
                errors.append({
                    "field": "password",
                    "msg": "That username already exists, and the password does not match"
                })
                resp = jsonify({"errors": errors})
                resp.status_code = 400
                return resp
        else:
            user = User(username, password)
            user.save()
            resp = jsonify({"user": user.to_api_dict()})
            resp.status_code = 200
            return resp

    return

@socketio.on("chat", namespace='/chat')
def handle_chat(json):
    print("recetived json:" + str(json))

@socketio.on('connect', namespace='/chat')
def test_connect():
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect', namespace='/chat')
def test_disconnect():
    print('Client disconnected')

if __name__ == "__main__":
    db.create_all()
    socketio.run(app)
