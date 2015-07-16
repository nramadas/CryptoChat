import React                from "../lib/React";
import StyleLibrary         from "../lib/StyleLibrary";
import ClientViewFriend     from "./ClientViewFriend"

export default React.createClass({
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
                "top": "0px",
                "color": colors.baseOrange,
                "font-size": "24px",
                "font-family": "inconsolata",
                "border-top": `4px solid ${colors.lightOrange}`,
                "background-color": "white",
            },

            friendsList: {
                ...mixins.fullHoriz(),
                "top": `${titleHeight}px`,
                "bottom": "0px",
                "border-top": `1px solid ${colors.lightOrange}`,
                "background-color": "white",
            },

            friend: {
                "position": "relative",
                "height": "50px",
                "border-bottom": `1px solid ${colors.veryLightOrange}`,
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

    onSelected(userId) {
        console.log(userId);
    },

    render() {
        let {friends, styles: {container, title, friendsList, friend}} = this.state;

        friends = friends.map((f) => {
            return (
                <div style={friend}>
                    <ClientViewFriend id={f.id}
                                      name={f.username}
                                      onSelected={this.onSelected} />
                </div>
            );
        });

        return (
            <div style={container}>
                <div style={title}>Friends</div>
                <div style={friendsList}>{friends}</div>
            </div>
        )
    }
});
