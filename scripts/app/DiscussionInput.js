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
        const leftMargin = "30px";

        let styles = {
            container: {
                ...mixins.fullBox(),
                "background-color": "white",
                "padding-left": leftMargin,
            },

            terminal: {
                ...mixins.fullVert(),
                ...mixins.centeredText({height: 45}),
                "left": "0",
                "width": leftMargin,
                "color": colors.baseOrange,
                "font-size": "28px",
            },

            textarea: {
                ...mixins.fullBox(),
                ...mixins.noOutline(),
                "display": "block",
                "width": "100%",
                "left": leftMargin,
                "overflow": "auto",
                "padding": "15px 15px 15px 0",
                "font-size": "16px",
                "line-height": "18px",
                "font-family": "inconsolata",
                "color": colors.baseBlueGrey,
            }

        };

        return {styles}
    },

    onSubmit() {
        let input = React.findDOMNode(this.refs.input);
        let msg = input.value || "";
        this.props.onMessageSendRequest(msg);
        input.value = "";
    },

    onKeyPress(event) {
        if (event.key == "Enter" && !event.shiftKey) {
            event.preventDefault();
            this.onSubmit();
        }
    },

    render() {
        const {container, terminal, textarea} = this.state.styles;

        return (
            <div style={container}>
                <div style={terminal} >
                    >
                </div>
                <textarea style={textarea}
                          ref="input"
                          onKeyPress={this.onKeyPress} />
            </div>
        )
    },
});
