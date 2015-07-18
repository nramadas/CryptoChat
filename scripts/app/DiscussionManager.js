import React        from "../lib/React";
import SocketIO     from "../lib/Socketio";
import Discussion   from "./Discussion";

const SOCKETENDPOINT = "/chat";

export default class DiscussionManager {
    constructor() {
        let discussions = {};
        this.userID = null;

        // Priviledged methods
        this.getDiscussion = (friendID) => {
            if (!discussions[friendID]) {
                discussions[friendID] = this.createDiscussion(friendID);
            }

            return discussions[friendID];
        };

        // setup
        this.setupSocket();
    }

    setupSocket() {
        this.socket = SocketIO.connect(SOCKETENDPOINT);
        this.socket.on("connect", () => {
            console.log("connected");
        });

        this.socket.on("incomingMessage", (payload) => {

        });
    }

    register(userID) {
        this.userID = userID;
        this.socket.emit("register", this.userID);
    }

    createDiscussion(friendID) {
        const discussion = React.createElement(Discussion, {
            onMessageSendRequest: (msg) => {
                const payload = {
                    msg,
                    userID: String(this.userID),
                    friendID: String(friendID),
                };

                this.socket.emit("chat", payload, (response) => {
                    console.log("response", response);
                });
            }
        })

        return discussion;
    }
}
