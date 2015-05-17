"use strict";

var requirements = ["react", "styleLibrary"];

define(requirements, function (React, StyleLibrary) {
    return React.createClass({
        getInitialState: function getInitialState() {
            var colors = StyleLibrary.colors;

            return {
                styles: {
                    self: {
                        "position": "absolute",
                        "top": 0,
                        "bottom": 0,
                        "left": 0,
                        "right": 0,
                        "background-color": colors.baseOrange },

                    title: {
                        "position": "absolute",
                        "left": "50%",
                        "top": "50%",
                        "margin-left": "-100px",
                        "margin-top": "-25px",
                        "width": "200px",
                        "height": "50px",
                        "line-height": "50px",
                        "font-size": "24px",
                        "text-align": "center",
                        "color": "white" }
                }
            };
        },

        render: function render() {
            var styles = this.state.styles;

            return React.createElement(
                "div",
                { className: "ClientViewHeader", style: styles.self },
                React.createElement(
                    "div",
                    { className: "ClientViewHeader__Title", style: styles.title },
                    "CryptoChat"
                )
            );
        }
    });
});