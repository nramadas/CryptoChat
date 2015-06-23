import React from "../lib/React";

export default React.createClass({
    getInitialState() {
        return {
            styles: {
                self: {
                    "position": "absolute",
                    "top": 0,
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                }
            }
        };
    },

    render() {
        let {styles} = this.state;

        return (
            <div className="ClientViewFriends" style={styles.self} ></div>
        )
    }
});