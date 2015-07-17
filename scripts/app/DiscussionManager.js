import React        from "../lib/React";
import SocketIO     from "../lib/Socketio";
import Discussion   from "./Discussion";

const SOCKETENDPOINT = "/chat";

export default class DiscussionManager {
    constructor() {
        let discussions = {};
        this.socket = SocketIO.connect(SOCKETENDPOINT);
        this.socket.on("connect", () => {
            console.log("connected");
        });

        // Priviledged methods
        this.getDiscussion = (friendID) => {
            if (!discussions[friendID]) {
                discussions[friendID] = this.createDiscussion(friendID);
            }

            return discussions[friendID];
        }
    }

    createDiscussion(friendID) {
        const discussion = React.createElement(Discussion, {
            onMessageSend: (msg) => {
                const payload = {msg, friendID};
                this.socket.emit("chat", payload);
            }
        })

        return discussion;
    }
}
