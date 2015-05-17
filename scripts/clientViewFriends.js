const requirements = [
    "react",
];

define(requirements, (React) => {
    return React.createClass({
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
            return (
                <div className="ClientViewFriends" style={this.state.styles.self} ></div>
            )
        }
    });
});
