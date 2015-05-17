const requirements = [
    "react",
    "styleLibrary",
    "clientViewHeader",
    "clientViewFriends",
];

define(requirements, (React, StyleLibrary, ClientViewHeader, ClientViewFriends) => {
    return React.createClass({
        getInitialState() {
            const headerHeight = 60;
            const friendsViewWidth = 200;
            const inputAreaHeight = 50;
            let {colors} = StyleLibrary;

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
                        "border-right": `1px solid ${colors.orangeBorder}`,
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
                        "border-top": `1px solid ${colors.orangeBorder}`,
                    }
                }
            };
        },

        render() {
            let {styles} = this.state;

            return (
                <div className="ClientView" style={styles.self}>
                    <div className="ClientView__Header" style={styles.header}>
                        <ClientViewHeader />
                    </div>
                    <div className="ClientView__Friends" style={styles.friends}>
                        <ClientViewFriends />
                    </div>
                    <div className="ClientView__ChatWindow" style={styles.chat}></div>
                    <div className="ClientView__InputArea" style={styles.inputArea}></div>
                </div>
            );
        }
    });
});