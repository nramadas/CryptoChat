import React                from "../lib/React";
import StyleLibrary         from "../lib/StyleLibrary";
import ClientViewHeader     from "./ClientViewHeader";
import ClientViewFriends    from "./ClientViewFriends";

export default React.createClass({
    getInitialState() {
        const headerHeight = 60;
        const friendsViewWidth = 200;
        const inputAreaHeight = 50;
        let {colors, borders} = StyleLibrary;

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
                    "border-right": borders.orangeBorder,
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
                    "border-top": borders.orangeBorder,
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
