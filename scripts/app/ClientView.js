import React                from "../lib/React";
import StyleLibrary         from "../lib/StyleLibrary";
import ClientViewHeader     from "./ClientViewHeader";
import ClientViewFriends    from "./ClientViewFriends";

const T = React.PropTypes;

export default React.createClass({
    propTypes: {
        getDiscussion: T.func.isRequired,
    },

    getInitialState() {
        const friendsViewWidth = 220;
        const inputAreaHeight = 70;
        const {colors, borders, mixins} = StyleLibrary;
        const discussion = null;

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
                "bottom": 0,
                "right": 0
            },

            chatMessage: {
                ...mixins.centerBox({height: 60, width: 600}),
                ...mixins.centeredText({height: 60}),
                "font-size": "30px",
                "color": colors.lightBlueGrey,
            }
        };

        return {styles, discussion};
    },

    handleLogin(user) {
        this.refs.friends.handleLogin(user);
    },

    displayDiscussion(discussion) {
        let newState = {
            ...this.state,
            discussion
        };

        console.log(discussion);

        this.setState(newState);
    },

    render() {
        let {styles, discussion} = this.state;

        return (
            <div style={styles.container}>
                <div style={styles.friends}>
                    <ClientViewFriends ref="friends"
                                       onUserSelected={this.props.getDiscussion} />
                </div>
                <div style={styles.chat}>
                    <div style={styles.chatMessage} >
                        Don't be a loser. Talk to someone.
                    </div>
                    {discussion}
                </div>
            </div>
        );
    }
});
