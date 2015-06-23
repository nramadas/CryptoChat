import                       "babelify/polyfill";
import React            from "../lib/React";
import SocketIO         from "../lib/Socketio";
import ClientView       from "./ClientView";
import ClientViewLogin  from "./ClientViewLogin";

const socketEndpoint = "/chat";

export default class Client {
    constructor() {
        this.setupPublicAndPrivates();
        this.$container = null;
    }

    setupPublicAndPrivates() {
        let socket = SocketIO.connect(socketEndpoint);

        socket.on("connect", function() {
            console.log("connected");
        });

        var handleMessageSubmit = function(message) {
            console.log(message);
            socket.emit("chat", {data: message});
        };
    }

    appendTo($container) {
        this.$container = $container;
        React.render(React.createElement(ClientViewLogin, null), $container);
    }
}
