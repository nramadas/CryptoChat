import React                from "../lib/React";
import StyleLibrary         from "../lib/StyleLibrary";
import ClientViewFriend     from "./ClientViewFriend"

const T = React.PropTypes;

export default React.createClass({
    propTypes: {
        onUserSelected: T.func.isRequired,
    },

    getInitialState() {
        const {colors, mixins} = StyleLibrary;
        const titleHeight = 50;

        let styles = {
            container: {
                ...mixins.fullBox(),
            },

            title: {
                ...mixins.fullHoriz(),
                ...mixins.centeredText({height: titleHeight}),
                "text-align": "left",
                "top": "0px",
                "padding-left": "10px",
                "color": colors.baseOrange,
                "font-size": "18px",
                "border-top": `4px solid ${colors.lightOrange}`,
                "background-color": "white",
            },

            friendsList: {
                ...mixins.fullHoriz(),
                "top": `${titleHeight}px`,
                "bottom": "0px",
                "background-color": "white",
                "border-top": `1px solid ${colors.veryLightOrange}`,
            },

            friend: {
                "position": "relative",
                "height": "40px",
                "border-bottom": `1px solid ${colors.veryLightOrange}`,
            },

            icon: {
                "margin-right": "10px",
            }
        };

        let friends = [];

        return {styles, friends};
    },

    async handleLogin(user) {
        let friends = await user.friends;
        let newState = {...this.state, friends};
        this.setState(newState);
    },

    render() {
        let {friends, styles: {container, title, friendsList, friend, icon}} = this.state;

        friends = friends.map((f) => {
            return (
                <div style={friend}>
                    <ClientViewFriend id={f.id}
                                      name={f.username}
                                      onSelected={this.props.onUserSelected} />
                </div>
            );
        });

        const friendCount = friends.length;

        return (
            <div style={container}>
                <div style={title}>
                    <i className="fa fa-users" style={icon}></i>
                    Friends ({friendCount})
                </div>
                <div style={friendsList}>{friends}</div>
            </div>
        )
    }
});
