import                           "babelify/polyfill";
import React                from "../lib/React";
import AJAX                 from "../utils/AJAX";
import User                 from "../models/User";
import ClientView           from "./ClientView";
import ClientViewLogin      from "./ClientViewLogin";
import ClientViewHeader     from "./ClientViewHeader";
import DiscussionManager    from "./DiscussionManager";

export default class Client {
    constructor() {
        this.$client = null;
        this.$login = null;
        this.$header = null;

        this.clientView = null;
        this.loginView = null;
        this.headerView = null;
        this.discussionManager = new DiscussionManager();
    }

    appendTo({client, login, header}) {
        this.$client = client;
        this.$login = login;
        this.$header = header;

        const clientView = React.createElement(ClientView, {
            getDiscussion: (userID) => {
                console.log(userID);
                const discussion = this.discussionManager.getDiscussion(userID);
                this.clientView.displayDiscussion(discussion);
            }
        });

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
            const userID = await user.id;
            this.discussionManager.register(userID);
            this.headerView.handleLogin(user);
            this.clientView.handleLogin(user);
            this.$client.style.opacity = 1;
            this.$login.style.opacity = 0;
            setTimeout(() => {
                this.$login.style.display = "none";
            }, 1100);
        } catch ({errors}) {
            this.loginView.handleFormErrors(errors);
        }
    }
}
