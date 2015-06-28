import _                            from "../lib/Lodash";
import React                        from "../lib/React";
import StyleLibrary                 from "../lib/StyleLibrary";
import LayoutModalSectionHeader     from "../layout/ModalSectionHeader";
import LayoutModalContent           from "../layout/ModalContent";
import LayoutModalSection           from "../layout/ModalSection";
import LayoutPageHeader             from "../layout/PageHeader";
import VerticalInput                from "../components/VerticalInput";
import VerticalSubmit               from "../components/VerticalSubmit";
import objIterate                   from "../utils/objIterate";

let T = React.PropTypes;

export default React.createClass({
    propTypes: {
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
            box: {
                "margin": "60px auto",
                "width": "400px",
            },

            wrapper: {
                "margin": "0",
            },

            errorBox: {
                "height": "0px",
                "padding": "0 15px",
                "color": colors.red,
                "background-color": colors.veryLightRed,
                "font-size": "14px",
                "line-height": "18px",
                "overflow": "hidden",
            },
        };

        _.extend(styles.errorBox,
            mixins.borderbox(),
            mixins.forceHardwareAcceleration(),
            mixins.transition({"height": "0.2s", "padding": "0.2s"}));

        let errors = [];

        return {styles, errors};
    },

    onSubmit() {
        let username = this.refs.username.getValue();
        let password = this.refs.password.getValue();
        this.props.onSubmit({username, password});
    },

    handleFormErrors(errors) {
        let errorMsgs = [];
        let newState = _.extend({}, this.state);
        for (let index in errors) {
            let {field, msg} = errors[index];
            this.refs[field].renderError(msg);
            errorMsgs.push(msg);
        }

        if (errorMsgs.length > 1) {
            errorMsgs[1] = "Also, " + errorMsgs[1].toLowerCase();
        }

        newState.errors = errorMsgs;
        newState.styles.errorBox.height = "66px";
        newState.styles.errorBox.padding = "15px";
        this.setState(newState);
    },

    render() {
        let {errors, styles: {box, wrapper, errorBox}} = this.state;

        return (
            <div>
                <LayoutPageHeader title="CryptoChat" />
                <div style={box}>
                    <div style={wrapper}>
                        <LayoutModalSectionHeader title="Get Started." />
                        <LayoutModalSection >
                            <div style={errorBox}>
                                {errors.join(" ")}
                            </div>
                        </LayoutModalSection>
                        <LayoutModalSection>
                            <VerticalInput name="username"
                                           title="Username"
                                           ref="username" />
                        </LayoutModalSection>
                        <LayoutModalSection spacingMultiplier="2" >
                            <VerticalInput name="password"
                                           title="Password"
                                           type="password"
                                           fontSize="10px"
                                           ref="password" />
                        </LayoutModalSection>
                        <LayoutModalSection>
                            <VerticalSubmit buttonText="Submit"
                                            onSubmit={this.onSubmit} />
                        </LayoutModalSection>
                    </div>
                </div>
            </div>
        );
    },
});
