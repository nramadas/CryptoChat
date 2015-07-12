import                       "babelify/polyfill";
import React            from "../lib/React";
import SocketIO         from "../lib/Socketio";
import AJAX             from "../utils/AJAX";
import User             from "../models/User";
import ClientView       from "./ClientView";
import ClientViewLogin  from "./ClientViewLogin";
import ClientViewHeader from "./ClientViewHeader";

const socketEndpoint = "/chat";

export default class Client {
    constructor() {
        this.setupPublicAndPrivates();
        this.$client = null;
        this.$login = null;
        this.$header = null;

        this.clientView = null;
        this.loginView = null;
        this.headerView = null;
    }

    setupPublicAndPrivates() {
        const socket = SocketIO.connect(socketEndpoint);

        socket.on("connect", function() {
            console.log("connected");
        });

        var handleMessageSubmit = function(message) {
            console.log(message);
            socket.emit("chat", {data: message});
        };
    }

    appendTo({client, login, header}) {
        this.$client = client;
        this.$login = login;
        this.$header = header;

        const clientView = React.createElement(ClientView, {});

        const loginView = React.createElement(ClientViewLogin, {
            onSubmit: this.fetchUser.bind(this)
        });

        const headerView = React.createElement(ClientViewHeader, {
            onLogOut: () => {
                window.location.reload();
            },
        });

        this.clientView = React.render(clientView, this.$client);
        this.loginView = React.render(loginView, this.$login);
        this.headerView = React.render(headerView, this.$header);
    }

    async fetchUser(params) {
        let user = User.fetch(params);
        console.log(user);

        try {
            const username = await user.username;
            this.headerView.handleLogin(user);
            this.$client.style.opacity = 1;
            this.$login.style.opacity = 0;
        } catch ({errors}) {
            this.loginView.handleFormErrors(errors);
        }
    }
}
