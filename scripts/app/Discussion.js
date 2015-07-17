import React            from "../lib/React";
import StyleLibrary     from "../lib/StyleLibrary";
import DiscussionInput  from "./DiscussionInput";

const T = React.PropTypes;

export default React.createClass({
    getInitialState() {
        const {mixins, colors} = StyleLibrary;
        const inputHeight = "20px";

        let styles = {
            container: mixins.fullBox(),

            chatView: {
                ...mixins.fullHoriz(),
                "top": "0",
                "bottom": inputHeight,
                "background-color": "white",
            },

            inputArea: {
                ...mixins.fullHoriz(),
                "bottom": "0",
                "height": inputHeight,
            },
        }

        return {styles};
    },

    render() {
        const {container, chatView, inputArea} = this.state.styles;

        <div style={container}>
            <div style={chatView}>

            </div>
            <div style={inputArea}>
                <DiscussionInput />
            </div>
        </div>
    }
});
