import React                from "../lib/React";
import StyleLibrary         from "../lib/StyleLibrary";
import ClientViewHeader     from "./ClientViewHeader";
import ClientViewFriends    from "./ClientViewFriends";
import ClientViewMsgSend    from "./ClientViewMsgSend";

export default React.createClass({
    getInitialState() {
        const friendsViewWidth = 220;
        const inputAreaHeight = 70;
        const {colors, borders, mixins} = StyleLibrary;

        let styles = {
            container: mixins.fullBox(),

            friends: {
                ...mixins.fullVert(),
                ...mixins.borderbox(),
                "left": 0,
                "width": friendsViewWidth,
                "border-right": borders.orangeBorder,
            },

            chat: {
                ...mixins.borderbox(),
                "position": "absolute",
                "top": 0,
                "left": friendsViewWidth,
                "bottom": inputAreaHeight,
                "right": 0
            },

            inputArea: {
                ...mixins.borderbox(),
                "position": "absolute",
                "left": friendsViewWidth,
                "right": 0,
                "bottom": 0,
                "height": inputAreaHeight,
                "border-top": borders.orangeBorder,
            },
        };

        return {styles};
    },

    render() {
        let {styles} = this.state;

        return (
            <div style={styles.container}>
                <div style={styles.friends}>
                    <ClientViewFriends />
                </div>
                <div style={styles.chat}></div>
                <div style={styles.inputArea}>
                    <ClientViewMsgSend />
                </div>
            </div>
        );
    }
});
