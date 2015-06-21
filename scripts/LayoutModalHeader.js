import StyleLibrary from "./StyleLibrary";
import React        from "./React";
import _            from "./Lodash"

let T = React.PropTypes;

export default React.createClass({
    propTypes: {
        title: T.string.isRequired,
    },

    getInitialState() {
        let {colors, mixins} = StyleLibrary;

        let styles = {
            "background-color": colors.baseOrange,
            "height": "50px",
            "line-height": "50px",
            "text-align": "center",
            "font-size": "24px",
            "color": colors.lightOrange,
        };

        _.extend(styles,
            mixins.boxShadow({
                color: colors.lightOrange,
                blur: 8,
                spread: 8
            }))

        return {styles};
    },

    render() {
        return (
            <div style={this.state.styles}>
                {this.props.title}
            </div>
        );
    },
})
