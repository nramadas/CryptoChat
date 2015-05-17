"use strict";

var requirements = ["react", "styleLibrary", "clientViewHeader", "clientViewFriends"];

define(requirements, function (React, StyleLibrary, ClientViewHeader, ClientViewFriends) {
    return React.createClass({
        getInitialState: function getInitialState() {
            var headerHeight = 60;
            var friendsViewWidth = 200;
            var inputAreaHeight = 50;
            var colors = StyleLibrary.colors;

            return {
                styles: {
                    self: {
                        "position": "absolute",
                        "top": 0,
                        "left": 0,
                        "right": 0,
                        "bottom": 0
                    },

                    header: {
                        "position": "absolute",
                        "top": 0,
                        "left": 0,
                        "right": 0,
                        "height": headerHeight },

                    friends: {
                        "position": "absolute",
                        "top": headerHeight,
                        "left": 0,
                        "bottom": 0,
                        "width": friendsViewWidth,
                        "border-right": "1px solid " + colors.orangeBorder },

                    chat: {
                        "position": "absolute",
                        "top": headerHeight,
                        "left": friendsViewWidth,
                        "bottom": inputAreaHeight,
                        "right": 0
                    },

                    inputArea: {
                        "position": "absolute",
                        "left": friendsViewWidth,
                        "right": 0,
                        "bottom": 0,
                        "height": inputAreaHeight,
                        "border-top": "1px solid " + colors.orangeBorder }
                }
            };
        },

        render: function render() {
            var styles = this.state.styles;

            return React.createElement(
                "div",
                { className: "ClientView", style: styles.self },
                React.createElement(
                    "div",
                    { className: "ClientView__Header", style: styles.header },
                    React.createElement(ClientViewHeader, null)
                ),
                React.createElement(
                    "div",
                    { className: "ClientView__Friends", style: styles.friends },
                    React.createElement(ClientViewFriends, null)
                ),
                React.createElement("div", { className: "ClientView__ChatWindow", style: styles.chat }),
                React.createElement("div", { className: "ClientView__InputArea", style: styles.inputArea })
            );
        }
    });
});