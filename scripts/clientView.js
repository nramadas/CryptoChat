const requirements = [
    "react",
    "clientViewHeader",
    "clientViewFriends",
];

define(requirements, (React, ClientViewHeader, ClientViewFriends) => {
    return React.createClass({
        getInitialState() {
            let headerHeight = 80;
            let friendsViewWidth = 200;
            let inputAreaHeight = 50;

            return {
                styles: {
                    self: {
                        "position": "absolute",
                        "top": 0,
                        "left": 0,
                        "right": 0,
                        "bottom": 0
                    },

                    header: {
                        "position": "absolute",
                        "top": 0,
                        "left": 0,
                        "right": 0,
                        "height": headerHeight,
                    },

                    friends: {
                        "position": "absolute",
                        "top": headerHeight,
                        "left": 0,
                        "bottom": 0,
                        "width": friendsViewWidth,
                        "border-right": "1px solid black",
                    },

                    chat: {
                        "position": "absolute",
                        "top": headerHeight,
                        "left": friendsViewWidth,
                        "bottom": inputAreaHeight,
                        "right": 0
                    },

                    inputArea: {
                        "position": "absolute",
                        "left": friendsViewWidth,
                        "right": 0,
                        "bottom": 0,
                        "height": inputAreaHeight,
                        "border-top": "1px solid black",
                    }
                }
            };
        },

        render() {
            return (
                <div className="ClientView" style={this.state.styles.self}>
                    <div className="ClientView__Header" style={this.state.styles.header}>
                        <ClientViewHeader />
                    </div>
                    <div className="ClientView__Friends" style={this.state.styles.friends}>
                        <ClientViewFriends />
                    </div>
                    <div className="ClientView__ChatWindow" style={this.state.styles.chat}></div>
                    <div className="ClientView__InputArea" style={this.state.styles.inputArea}></div>
                </div>
            );
        }
    });
});