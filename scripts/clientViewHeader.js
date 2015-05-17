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
                        "background-color": "black",
                    },

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
                        "color": "white",
                    }
                }
            }
        },

        render() {
            return (
                <div className="ClientViewHeader" style={this.state.styles.self} >
                    <div className="ClientViewHeader__Title" style={this.state.styles.title} >
                        CryptoChat
                    </div>
                </div>
            )
        }
    });
});
