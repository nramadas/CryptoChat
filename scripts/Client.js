import React            from "./React";
import SocketIO         from "./Socketio";
import ClientView       from "./ClientView";
import ClientLoginView  from "./ClientLoginView";

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
        React.render(React.createElement(ClientLoginView, null), $container);
    }
}
