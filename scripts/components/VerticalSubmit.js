import React from "../lib/React";

export default React.createClass({
    getInitialState() {
        return {
            styles: {

            }
        }
    },

    render() {
        let {styles} = this.state;

        return (
            <div style={styles}>

            </div>
        )
    },
});
