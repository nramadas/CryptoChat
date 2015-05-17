from flask import Flask, render_template
from flask.ext.socketio import SocketIO, send, emit

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route("/")
def frontpage():
	return render_template("frontpage.html")

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
	socketio.run(app)
