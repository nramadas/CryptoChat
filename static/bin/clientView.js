"use strict";

var requirements = ["react", "clientViewHeader", "clientViewFriends"];

define(requirements, function (React, ClientViewHeader, ClientViewFriends) {
	return React.createClass({
		getInitialState: function getInitialState() {
			var headerHeight = 80;
			var friendsViewWidth = 200;
			var inputAreaHeight = 50;

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
						"border-right": "1px solid black" },

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
						"border-top": "1px solid black" }
				}
			};
		},

		render: function render() {
			return React.createElement(
				"div",
				{ className: "ClientView", style: this.state.styles.self },
				React.createElement(
					"div",
					{ className: "ClientView__Header", style: this.state.styles.header },
					React.createElement(ClientViewHeader, null)
				),
				React.createElement(
					"div",
					{ className: "ClientView__Friends", style: this.state.styles.friends },
					React.createElement(ClientViewFriends, null)
				),
				React.createElement("div", { className: "ClientView__ChatWindow", style: this.state.styles.chat }),
				React.createElement("div", { className: "ClientView__InputArea", style: this.state.styles.inputArea })
			);
		}
	});
});