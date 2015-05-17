define(["react"], (React) => {
	return React.createClass({
		handleSubmit(e) {
			e.preventDefault();
			let message = React.findDOMNode(this.refs.chatMessage).value.trim();
			this.props.onSubmit(message);
		},

		render() {
			return (
				<div className="ChatBox" onSubmit={this.handleSubmit}>
					<form className="ChatBox__Form">
						<input type="text" placeholder="message" ref="chatMessage" />
						<input type="submit" value="Send" />
					</form>
				</div>
			);
		}
	})
});
