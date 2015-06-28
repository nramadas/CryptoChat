import                       "babelify/polyfill";
import _                from "../lib/Lodash";
import React            from "../lib/React";
import SocketIO         from "../lib/Socketio";
import AJAX             from "../utils/AJAX";
import User             from "../models/User";
import ClientView       from "./ClientView";
import ClientViewLogin  from "./ClientViewLogin";

const socketEndpoint = "/chat";

export default class Client {
    constructor() {
        this.setupPublicAndPrivates();
        this.$client = null;
        this.$login = null;
        this.clientView = null;
        this.loginView = null;
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

    appendTo({client, login}) {
        this.$client = client;
        this.$login = login;

        let clientView = React.createElement(ClientView, {});

        let loginView = React.createElement(ClientViewLogin, {
            onSubmit: this.fetchUser.bind(this)
        });

        this.clientView = React.render(clientView, this.$client);
        this.loginView = React.render(loginView, this.$login);
    }

    async fetchUser(params) {
        let user = User.fetch(params);
        console.log(user);

        try {
            let username = await user.username;
            this.$client.style.opacity = 1;
            this.$login.style.opacity = 0;
        } catch ({errors}) {
            this.loginView.handleFormErrors(errors);
        }
    }
}
