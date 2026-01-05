from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS
import base64

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on("connect")
def connect():
    print("Frontend connected")

@socketio.on("ir_frame")
def receive_ir(data):
    # Here: decode IR image
    image_bytes = base64.b64decode(data)

    # TODO: run DL model
    prediction = "Pneumonia Detected"

    socketio.emit("ai_result", {
        "prediction": prediction,
        "confidence": "92%"
    })

if __name__ == "__main__":
    socketio.run(app, port=7000)
