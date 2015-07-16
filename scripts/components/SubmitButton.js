import React        from "../lib/React";
import StyleLibrary from "../lib/StyleLibrary";

let T = React.PropTypes;

export default React.createClass({
    propTypes: {
        buttonText: T.string.isRequired,
        onSubmit: T.func,
    },

    getDefaultProps() {
        return {
            onSubmit: () => {},
        };
    },

    getInitialState() {
        const {colors, borders, mixins} = StyleLibrary;

        let styles = {
            ...mixins.borderbox(),
            ...mixins.roundedCorners(5),
            ...mixins.forceHardwareAcceleration(),
            ...mixins.transition({"background-color": "0.2s"}),
            "padding": "0 10px",
            "background-color": colors.baseOrange,
            "color": "white",
            "height": "40px",
            "line-height": "38px",
            "text-align": "center",
            "cursor": "pointer",
        };

        return {styles};
    },

    onMouseEnter() {
        const {colors} = StyleLibrary;
        let newState = {...this.state, styles: {
            ...this.state.styles,
            "background-color": colors.baseBlueGrey,
        }};
        this.setState(newState);
    },

    onMouseLeave() {
        const {colors} = StyleLibrary;
        let newState = {...this.state, styles: {
            ...this.state.styles,
            "background-color": colors.baseOrange,
        }};
        this.setState(newState);
    },

    onSubmit() {
        this.props.onSubmit();
    },

    render() {
        return (
            <div style={this.state.styles}
                 onMouseEnter={this.onMouseEnter}
                 onMouseLeave={this.onMouseLeave}
                 onClick={this.onSubmit}>
                {this.props.buttonText}
            </div>
        )
    },
});
