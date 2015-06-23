import React from "../lib/React";

export default React.createClass({
    getInitialState() {
        return {
            styles: {
                "margin-bottom": "20px",
            }
        }
    },

    render() {
        let {styles} = this.state;

        return (
            <div style={styles}>{this.props.children}</div>
        )
    }
});
