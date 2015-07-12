import React            from "../lib/React";
import StyleLibrary     from "../lib/StyleLibrary";

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
                "background-color": "white",
            },
        };

        return {styles};
    },

    render() {
        let {container, title, friendsList} = this.state.styles;

        return (
            <div style={container}>
                <div style={title}>Friends</div>
                <div style={friendsList}></div>
            </div>
        )
    }
});
