import React            from "../lib/React";
import StyleLibrary     from "../lib/StyleLibrary";

let T = React.PropTypes;

export default React.createClass({
    propTypes: {
        id: T.string.isRequired,
        name: T.string.isRequired,
        onSelected: T.func.isRequired,
    },

    getInitialState() {
        const {colors, mixins} = StyleLibrary;

        let styles = {
            container: {
                ...mixins.borderbox(),
                ...mixins.fullBox(),
                "cursor": "pointer",
                "background-color": "white",
                "color": colors.baseBlueGrey,
                "font-size": "16px",
                "padding": "0 10px 0 40px",
            },

            content: {
                ...mixins.centeredText({height: 40}),
                ...mixins.textOverflow(),
                "text-align": "left",
            },
        };

        return {styles};
    },

    onClick() {
        this.props.onSelected(this.props.id);
    },

    onMouseEnter() {
        const {colors} = StyleLibrary;

        let newState = {
            ...this.state,
            styles: {
                ...this.state.styles,
                container: {
                    ...this.state.styles.container,
                    "background-color": colors.lightBlueGrey,
                    "color": "white",
                }
            }
        };

        this.setState(newState);
    },

    onMouseLeave() {
        const {colors} = StyleLibrary;

        let newState = {
            ...this.state,
            styles: {
                ...this.state.styles,
                container: {
                    ...this.state.styles.container,
                    "background-color": "white",
                    "color": colors.baseBlueGrey,
                }
            }
        };

        this.setState(newState);
    },

    render() {
        const {container, content} = this.state.styles;

        return (
            <div style={container}
                 onClick={this.onClick}
                 onMouseEnter={this.onMouseEnter}
                 onMouseLeave={this.onMouseLeave} >
                <div style={content}>{this.props.name}</div>
            </div>
        )
    }
});
