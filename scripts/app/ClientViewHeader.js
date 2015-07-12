import React                from "../lib/React";
import StyleLibrary         from "../lib/StyleLibrary";
import LayoutPageHeader     from "../layout/PageHeader";

export default React.createClass({
    componentWillMount() {
        this.user = null;
    },

    getDefaultProps() {
        return {
            onLogOut: () => {},
        }
    },

    getInitialState() {
        const {colors, mixins} = StyleLibrary;

        let styles = {
            content: {
                ...mixins.centerVert({height: 40}),
                "margin-top": "-25px",
                "right": "15px",
                "line-height": "40px",
                "color": colors.baseOrange,
            },

            icon: {
                "margin-left": "15px",
                "cursor": "pointer",
            }
        };

        return {
            styles,
            username: "",
        };
    },

    async handleLogin(user) {
        this.user = user;

        try {
            const username = await user.username;
            let newState = {...this.state, username};
            this.setState(newState);
        } catch ({errors}) {

        }
    },

    render() {
        const {content, icon} = this.state.styles;
        let userDisplay = null;

        if (this.state.username) {
            userDisplay = (
                <div style={content}>
                    <span>{this.state.username}</span>
                    <i className="fa fa-gear" style={icon}></i>
                    <i className="fa fa-sign-out" style={icon} onClick={this.props.onLogOut}></i>
                </div>
            )
        }

        return (
            <div>
                <LayoutPageHeader title="CryptoChat" />
                {userDisplay}
            </div>
        )
    },
});
