import React        from "../lib/React";
import _            from "../lib/Lodash";
import StyleLibrary from "../lib/StyleLibrary";

let T = React.PropTypes;

export default React.createClass({
    propTypes: {
        title: T.string.isRequired,
        name: T.string.isRequired,
        type: T.string,
    },

    getDefaultProps() {
        return {
            type: "text",
            fontSize: "18px",
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
            }
        };

        _.extend(styles.input,
            mixins.roundedCorners(5),
            mixins.borderbox(),
            {"font-size": this.props.fontSize});

        return {
            styles,
        }
    },

    onFocus() {
        let newState = {};
        _.extend(newState, this.state);
        newState.styles.input.border = StyleLibrary.borders.orangeBorder;
        this.setState(newState);
    },

    onBlur() {
        let newState = {};
        _.extend(newState, this.state);
        newState.styles.input.border = StyleLibrary.borders.lightOrangeBorder;
        this.setState(newState);
    },

    render() {
        let {label, input} = this.state.styles;

        return (
            <div>
                <label style={label} >
                    {this.props.title}
                    <input name={this.props.name}
                           type={this.props.type}
                           style={input} 
                           onFocus={this.onFocus}
                           onBlur={this.onBlur} />
                </label>
            </div>
        );
    },
});
