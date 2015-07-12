import React        from "../lib/React";
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
                ...mixins.forceHardwareAcceleration(),
                ...mixins.transition({"color": "0.2s"}),
                "font-size": "22px",
                "color": colors.baseOrange,
                "font-family": "poiret",
            },

            input: {
                ...mixins.inputStyling(),
                ...mixins.forceHardwareAcceleration(),
                ...mixins.transition({"border": "0.2s", "background-color": "0.2s"}),
                "width": "100%",
                "height": "40px",
                "margin-top": "8px",
                "line-height": "40px",
                "border": borders.lightOrangeBorder,
                "font-family": "lato",
                "font-size": this.props.fontSize,
            },
        };

        return {styles};
    },

    onFocus() {
        let {colors, borders} = StyleLibrary;
        let newState = {...this.state};
        newState.styles.input.border = borders.orangeBorder;
        newState.styles.input["background-color"] = colors.veryLightOrange;
        newState.styles.label.color = colors.baseOrange;
        this.setState(newState);
    },

    onBlur() {
        let {colors, borders} = StyleLibrary;
        let newState = {...this.state};
        newState.styles.input.border = borders.lightOrangeBorder;
        newState.styles.input["background-color"] = "white";
        this.setState(newState);
    },

    getValue() {
        return React.findDOMNode(this.refs.input).value || "";
    },

    renderError(errorMsg) {
        let {colors, borders} = StyleLibrary;
        let newState = {...this.state};
        newState.styles.input.border = borders.redBorder;
        newState.styles.input["background-color"] = colors.veryLightRed;
        newState.styles.label.color = colors.red;
        this.setState(newState);
    },

    onKeyPress(event) {
        if (event.key == "Enter") {
            this.props.onSubmit();
        }
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
                           onKeyPress={this.onKeyPress}
                           ref="input" />
                </label>
            </div>
        );
    },
});
