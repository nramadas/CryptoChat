import _                    from "./Lodash";
import React                from "./React";
import StyleLibrary         from "./StyleLibrary";
import LayoutModalHeader    from "./LayoutModalHeader"
import LayoutModalContent   from "./LayoutModalContent"

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

                    </LayoutModalContent>
                </div>
            </div>
        );
    }
});
