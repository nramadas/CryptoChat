import _            from "../lib/Lodash";
import React        from "../lib/React";
import StyleLibrary from "../lib/StyleLibrary";

let T = React.PropTypes;

export default React.createClass({
    propTypes: {
        title: T.string.isRequired,
    },

    getInitialState() {
        let {colors, mixins} = StyleLibrary;

        let styles = {
            title: {
                "height": "60px",
                "line-height": "60px",
                "text-align": "center",
                "font-size": "24px",
                "background-color": colors.baseBlueGrey,
                "color": colors.baseOrange,
                "font-family": "inconsolata",
            },

            border: {
                "height": "8px",
                "background": "url('/static/assets/borderbar.png')",
                "background-size": "16px 8px",
            },
        };

        return {styles};
    },


    render() {
        let {title, border} = this.state.styles;

        return (
            <div>
                <div style={title}>{this.props.title}</div>
                <div style={border}></div>
            </div>
        );
    }
})
