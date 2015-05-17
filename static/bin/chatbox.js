"use strict";

define(["react"], function (React) {
    return React.createClass({
        handleSubmit: function handleSubmit(e) {
            e.preventDefault();
            var message = React.findDOMNode(this.refs.chatMessage).value.trim();
            this.props.onSubmit(message);
        },

        render: function render() {
            return React.createElement(
                "div",
                { className: "ChatBox", onSubmit: this.handleSubmit },
                React.createElement(
                    "form",
                    { className: "ChatBox__Form" },
                    React.createElement("input", { type: "text", placeholder: "message", ref: "chatMessage" }),
                    React.createElement("input", { type: "submit", value: "Send" })
                )
            );
        }
    });
});