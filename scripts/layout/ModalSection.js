import React from "../lib/React";

let T = React.PropTypes;

export default React.createClass({
    propTypes: {
        spacingMultiplier: T.number,
    },

    getDefaultProps() {
        return {
            spacingMultiplier: 1,
        }
    },

    getInitialState() {
        let margin = this.props.spacingMultiplier * 20;

        return {
            styles: {
                "margin-bottom": `${margin}px`,
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
