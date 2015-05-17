"use strict";

// true

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

// true

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requirements = ["react", "socketio", "clientView"];

define(requirements, function (React, SocketIO, ClientView) {
    var socketEndpoint = "/chat";

    return (function () {
        function Client() {
            _classCallCheck(this, Client);

            this.setupPublicAndPrivates();
        }

        _createClass(Client, [{
            key: "setupPublicAndPrivates",
            value: function setupPublicAndPrivates() {
                var socket = SocketIO.connect(socketEndpoint);

                socket.on("connect", function () {
                    console.log("connected");
                });

                var handleMessageSubmit = function handleMessageSubmit(message) {
                    console.log(message);
                    socket.emit("chat", { data: message });
                };
            }
        }, {
            key: "appendTo",
            value: function appendTo(container) {
                React.render(React.createElement(ClientView, null), container);
            }
        }]);

        return Client;
    })();
});