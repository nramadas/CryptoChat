import React            from "../lib/React";
import StyleLibrary     from "../lib/StyleLibrary";
import SubmitButton     from "../components/SubmitButton";

const T = React.PropTypes;

export default React.createClass({
    propTypes: {
        onMessageSendRequest: T.func,
    },

    getDefaultProps() {
        return {
            onMessageSendRequest: () => {},
        }
    },

    getInitialState() {
        const {mixins, colors, borders} = StyleLibrary;

        let styles = {
            container: {
                ...mixins.fullBox(),
                "background-color": "white",
                "padding-right": "130px",
            },

            input: {
                ...mixins.inputStyling(),
                "height": "40px",
                "width": "100%",
                "margin-top": "15px",
                "margin-left": "15px",
                "border": borders.lightOrangeBorder,
                "font-size": "18px",
                "font-family": "lato",
            },

            button: {
                "position": "absolute",
                "top": "15px",
                "right": "15px",
                "height": "40px",
                "width": "85px",
            },
        };

        return {styles}
    },

    onSubmit() {
        let msg = React.findDOMNode(this.refs.input).value || "";
        this.props.onMessageSendRequest(msg);
    },

    onKeyPress(event) {
        if (event.key == "Enter") {
            this.onSubmit();
        }
    },

    render() {
        const {container, input, button} = this.state.styles;

        return (
            <div style={container}>
                <input style={input}
                       type="text"
                       name="msg"
                       ref="input"
                       onKeyPress={this.onKeyPress} />
                <div style={button}>
                    <SubmitButton buttonText="Submit"
                                  onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    },
});
