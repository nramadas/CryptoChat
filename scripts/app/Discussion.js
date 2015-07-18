import React            from "../lib/React";
import StyleLibrary     from "../lib/StyleLibrary";
import DiscussionInput  from "./DiscussionInput";

const T = React.PropTypes;

export default React.createClass({
    propTypes: {
        onMessageSendRequest: T.func.isRequired,
    },

    getInitialState() {
        const {mixins, colors} = StyleLibrary;
        const inputHeight = "50px";
        const messages = [];

        let styles = {
            container: mixins.fullBox(),

            chatView: {
                ...mixins.fullHoriz(),
                "top": "0",
                "bottom": inputHeight,
                "background-color": "white",
                "border-top": `4px solid ${colors.lightOrange}`,
            },

            inputArea: {
                ...mixins.fullHoriz(),
                "bottom": "0",
                "height": inputHeight,
                "border-top": `1px solid ${colors.lightOrange}`,
            },
        }

        return {styles};
    },

    handleIncomingMessage(msg) {

    },

    render() {
        const {container, chatView, inputArea} = this.state.styles;

        return (
            <div style={container}>
                <div style={chatView}>

                </div>
                <div style={inputArea}>
                    <DiscussionInput onMessageSendRequest={this.props.onMessageSendRequest} />
                </div>
            </div>
        )
    }
});
