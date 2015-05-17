"use strict";

var requirements = ["react"];

define(requirements, function (React) {
    return React.createClass({
        getInitialState: function getInitialState() {
            return {
                styles: {
                    self: {
                        "position": "absolute",
                        "top": 0,
                        "bottom": 0,
                        "left": 0,
                        "right": 0 }
                }
            };
        },

        render: function render() {
            return React.createElement("div", { className: "ClientViewFriends", style: this.state.styles.self });
        }
    });
});