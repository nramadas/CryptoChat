import SocketIO from "../lib/Socketio";

const SOCKETENDPOINT = "/chat";

export default class Discussion {
    static create(friend) {
        let d = new Discussion(friend);
        d.connect();
        return d
    }

    constructor(friend) {
        this.friend = friend;
        this.socket = SocketIO.connect(SOCKETENDPOINT);
        window.socket = this.socket;
    }

    connect() {
        this.socket.on("connect", () => {
            console.log("connected");
        });
    }

    sendMessage(msg) {
        this.socket.emit("chat", msg, (response) => {
            console.log(response);
        });
    }
}