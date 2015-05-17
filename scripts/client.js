const requirements = [
	"react",
	"socketio",
	"clientView",
];

define(requirements, (React, SocketIO, ClientView) => {
	const socketEndpoint = "/chat";

	return class Client {
		constructor() {
			this.setupPublicAndPrivates();
		}

		setupPublicAndPrivates() {
			let socket = SocketIO.connect(socketEndpoint);

			socket.on("connect", function() {
				console.log("connected");
			});

			var handleMessageSubmit = function(message) {
				console.log(message);
				socket.emit("chat", {data: message});
			};

		}

		appendTo(container) {
			React.render(React.createElement(ClientView, null), container);
		}
	}
});
