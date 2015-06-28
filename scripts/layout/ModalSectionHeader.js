import _            from "../lib/Lodash";
import React        from "../lib/React";
import StyleLibrary from "../lib/StyleLibrary";

let T = React.PropTypes;

export default React.createClass({
    propTypes: {
        title: T.string.isRequired,
    },

    getInitialState() {
        let {colors} = StyleLibrary;
        let fontSize = "32px";

        let styles = {
            "font-size": fontSize,
            "line-height": fontSize,
            "color": colors.baseOrange,
            "font-family": "poiret",
            "padding-bottom": "30px",
        };

        return {styles};
    },

    render() {
        let {styles} = this.state;

        return (
            <div style={styles}>{this.props.title}</div>
        );
    }
});
