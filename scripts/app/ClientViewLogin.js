import _                    from "../lib/Lodash";
import React                from "../lib/React";
import StyleLibrary         from "../lib/StyleLibrary";
import LayoutModalHeader    from "../layout/ModalHeader";
import LayoutModalContent   from "../layout/ModalContent";
import LayoutModalSection   from "../layout/ModalSection";
import VerticalInput        from "../components/VerticalInput";

export default React.createClass({
    getInitialState() {
        let {colors, borders, mixins} = StyleLibrary;

        let styles = {
            wrapper: {},
            box: {
                "border": borders.orangeBorder,
                "overflow": "hidden",
            }
        };

        _.extend(styles.wrapper,
            mixins.fullBox(),
            mixins.patternBackground());

        _.extend(styles.box,
            mixins.centerBox({height: 400, width: 500}),
            mixins.roundedCorners(10),
            mixins.patternBackground());

        return {
            styles,
        };
    },

    render() {
        let {styles} = this.state;

        return (
            <div style={styles.wrapper}>
                <div style={styles.box}>
                    <LayoutModalHeader title="Get Started" />
                    <LayoutModalContent>
                        <LayoutModalSection>
                            <VerticalInput name="username"
                                           title="Username" />
                        </LayoutModalSection>
                        <LayoutModalSection>
                            <VerticalInput name="password"
                                           title="Password"
                                           type="password"
                                           fontSize="10px" />
                        </LayoutModalSection>
                    </LayoutModalContent>
                </div>
            </div>
        );
    }
});
