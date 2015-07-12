import React        from "../lib/React";
import StyleLibrary from "../lib/StyleLibrary";
import SubmitButton from "./SubmitButton";

let T = React.PropTypes;

export default React.createClass({
    propTypes: {
        buttonText: T.string.isRequired,
        onSubmit: T.function,
    },

    getDefaultProps() {
        return {
            onSubmit: () => {},
        }
    },

    getInitialState() {
        let {colors, borders, mixins} = StyleLibrary;

        let styles = {
            container:  mixins.clearFix(),
            button: {
                "float": "right",
            },
        };

        return {styles};
    },

    onSubmit() {
        this.props.onSubmit();
    },

    render() {
        let {container, button, clearfix} = this.state.styles;

        return (
            <div style={container}>
                <div style={button}>
                    <SubmitButton buttonText={this.props.buttonText}
                                  onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    },
});
