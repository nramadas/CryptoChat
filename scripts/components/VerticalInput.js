import React        from "../lib/React";
import _            from "../lib/Lodash";
import StyleLibrary from "../lib/StyleLibrary";

let T = React.PropTypes;

export default React.createClass({
    propTypes: {
        title: T.string.isRequired,
        name: T.string.isRequired,
        type: T.string,
        onSubmit: T.function,
    },

    getDefaultProps() {
        return {
            type: "text",
            fontSize: "18px",
            onSubmit: () => {},
        }
    },

    getInitialState() {
        let {colors, borders, mixins} = StyleLibrary;

        let styles = {
            label: {
                "font-size": "22px",
                "color": colors.baseOrange,
                "font-family": "poiret",
            },

            input: {
                "display": "block",
                "width": "100%",
                "height": "40px",
                "margin-top": "8px",
                "padding": "0 10px",
                "line-height": "40px",
                "font-size": "18px",
                "outline": "none",
                "border": borders.lightOrangeBorder,
                "font-family": "lato",
                "color": colors.baseBlueGrey,
                "background-color": "white",
            },
        };

        _.extend(styles.input,
            mixins.roundedCorners(5),
            mixins.borderbox(),
            mixins.forceHardwareAcceleration(),
            mixins.transition({"border": "0.2s", "background-color": "0.2s"}),
            {"font-size": this.props.fontSize});

        _.extend(styles.label,
            mixins.forceHardwareAcceleration(),
            mixins.transition({"color": "0.2s"}));

        return {styles};
    },

    onFocus() {
        let {colors, borders} = StyleLibrary;
        let newState = _.extend({}, this.state);
        newState.styles.input.border = borders.orangeBorder;
        newState.styles.input["background-color"] = colors.veryLightOrange;
        newState.styles.label.color = colors.baseOrange;
        this.setState(newState);
    },

    onBlur() {
        let {colors, borders} = StyleLibrary;
        let newState = _.extend({}, this.state);
        newState.styles.input.border = borders.lightOrangeBorder;
        newState.styles.input["background-color"] = "white";
        this.setState(newState);
    },

    getValue() {
        return React.findDOMNode(this.refs.input).value || "";
    },

    renderError(errorMsg) {
        let {colors, borders} = StyleLibrary;
        let newState = _.extend({}, this.state);
        newState.styles.input.border = borders.redBorder;
        newState.styles.input["background-color"] = colors.veryLightRed;
        newState.styles.label.color = colors.red;
        this.setState(newState);
    },

    render() {
        let {colors, borders} = StyleLibrary;
        let {label, input} = this.state.styles;

        return (
            <div>
                <label style={label} >
                    {this.props.title}
                    <input name={this.props.name}
                           type={this.props.type}
                           style={input} 
                           onFocus={this.onFocus}
                           onBlur={this.onBlur}
                           ref="input" />
                </label>
            </div>
        );
    },
});
