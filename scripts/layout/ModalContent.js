import React        from "../lib/React";
import StyleLibrary from "../lib/StyleLibrary";

let T = React.PropTypes;

export default React.createClass({
    getInitialState() {
        return {
            style: {
                "padding": "40px 20px",
            },
        };
    },

    render() {
        return (
            <div style={this.state.style}>{this.props.children}</div>
        );
    },
});
