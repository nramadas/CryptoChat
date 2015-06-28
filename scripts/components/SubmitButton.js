import _            from "../lib/Lodash";
import React        from "../lib/React";
import StyleLibrary from "../lib/StyleLibrary";

let T = React.PropTypes;

export default React.createClass({
    propTypes: {
        buttonText: T.string.isRequired,
        onSubmit: T.function,
    },

    getDefaultProps() {
        return {
            onSubmit: () => {},
        };
    },

    getInitialState() {
        let {colors, borders, mixins} = StyleLibrary;

        let styles = {
            "padding": "0 10px",
            "background-color": colors.baseOrange,
            "color": "white",
            "height": "40px",
            "line-height": "38px",
            "text-align": "center",
            "cursor": "pointer",
        };

        _.extend(styles,
            mixins.borderbox(),
            mixins.roundedCorners(5),
            mixins.forceHardwareAcceleration(),
            mixins.transition({"background-color": "0.2s"}));

        return {styles};
    },

    onMouseEnter() {
        let {colors} = StyleLibrary;
        let newState = _.extend(this.state);
        _.extend(newState.styles, {
            "background-color": colors.baseBlueGrey,
        });
        this.setState(newState);
    },

    onMouseLeave() {
        let {colors} = StyleLibrary;
        let newState = _.extend(this.state);
        _.extend(newState.styles, {
            "background-color": colors.baseOrange,
        });
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
