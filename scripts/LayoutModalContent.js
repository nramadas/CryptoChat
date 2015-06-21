import StyleLibrary from "./StyleLibrary";
import React        from "./React";

let T = React.PropTypes;

export default React.createClass({
    getInitialState() {
        return {
            style: {
                "padding": "20px",
            }
        }
    },

    render() {
        return (
            <div style={this.state.style}>{this.props.children}</div>
        );
    },
});
