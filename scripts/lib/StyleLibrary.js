import _ from "./Lodash";

let colors = {
    baseOrange: "#FF9800",
    lightOrange: "#ffe0b2",
    veryLightOrange: "#fff8e1",
    baseBlueGrey: "#455a64",
    lightBlueGrey: "#B0BEC5",
    darkBlueGrey: "#263238",
    red: "#f44336",
    veryLightRed: "#ffebee",

    // baseOrange: "#00E5DB",
    // lightOrange: "#ffe0b2",
    // veryLightOrange: "#fff8e1",
    // baseBlueGrey: "#3A4242",
    // lightBlueGrey: "#B0BEC5",
    // darkBlueGrey: "#263238",
    // red: "#f44336",
    // veryLightRed: "#ffebee",
};

let borders = {
    orangeBorder: `1px solid ${colors.baseOrange}`,
    lightOrangeBorder: `1px solid ${colors.lightOrange}`,
    redBorder: `1px solid ${colors.red}`,
};

let mixins = {
    centerBox({height, width}) {
        return {
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "width": `${width}px`,
            "height": `${height}px`,
            "margin-left": `-${width/2}px`,
            "margin-top": `-${height/2}px`,
        };
    },

    fullBox() {
        return {
            "position": "absolute",
            "top": "0px",
            "bottom": "0px",
            "left": "0px",
            "right": "0px",
        };
    },

    fullHoriz() {
        return {
            "position": "absolute",
            "left": "0px",
            "right": "0px",
        };
    },

    fullVert() {
        return {
            "position": "absolute",
            "top": "0px",
            "bottom": "0px",
        };
    },

    centerHoriz({width}) {
        return {
            "position": "absolute",
            "left": "50%",
            "margin-left": `-${width/2}px`,
            "width": `${width}px`,
        };
    },

    centerVert({height}) {
        return {
            "position": "absolute",
            "top": "50%",
            "margin-top": `-${height/2}px`,
            "height": `${height}px`,
        };
    },

    centeredText({height}) {
        return {
            "height": `${height}px`,
            "line-height": `${height}px`,
            "text-align": "center",
        }
    },

    roundedCorners(topLeft, topRight, bottomLeft, bottomRight) {
        if (!topRight) { topRight = topLeft };
        if (!bottomRight) { bottomRight = topRight };
        if (!bottomLeft) { bottomLeft = bottomRight };

        let str = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

        return {
            "-moz-border-radius": str,
            "-webkit-border-radius": str,
            "border-radius": str
        };
    },

    patternBackground() {
        return {
            "background": "url(\"/static/assets/crossword.png\")"
        };
    },

    boxShadow({color, x, y, blur, spread, inset}) {
        if (!x) { x = 0 };
        if (!y) { y = 0 };
        if (!blur) { blur = 0 };
        if (!spread) { spread = 0 };
        if (!inset) { inset = false };
        let str = "";

        if (color === "none") {
            str = "none";
        } else {
            str = `${color} ${x}px ${y}px ${blur}px ${spread}px`;
            if (inset) { str += " inset"; }
        }

        return {
            "-webkit-box-shadow": str,
            "-moz-box-shadow": str,
            "box-shadow": str
        };
    },

    borderbox() {
        return {
            "-webkit-box-sizing": "border-box",
            "-moz-box-sizing": "border-box",
            "box-sizing": "border-box",
        };
    },

    clearFix() {
        return {
            "overflow": "auto",
        };
    },

    forceHardwareAcceleration() {
        return {
            "-webkit-backface-visibility": "hidden",
            "-moz-backface-visibility": "hidden",
        };
    },

    transition(properties={}) {
        let str = _.map(properties, (value, key) => `${key} ${value}`).join(", ");

        return {
            "-webkit-transition": `-webkit-transform, ${str}`,
            "-moz-transition": `-moz-transform, ${str}`,
            "transition": `transform, ${str}`,
        };

    },

    inputStyling() {
        return {
            ...mixins.roundedCorners(5),
            ...mixins.borderbox(),
            "display": "block",
            "padding": "0 10px",
            "color": colors.baseBlueGrey,
            "background-color": "white",
            "outline": "none",
        }
    },

    textOverflow() {
        return {
            "overflow": "hidden",
            "white-space": "nowrap",
            "text-overflow": "ellipsis",
        }
    },

    noOutline() {
        return {
            "border": "none",
            "outline": "none",
            "-webkit-box-shadow": "none",
            "-moz-box-shadow": "none",
            "box-shadow": "none",
        }
    }
};

export default {colors, borders, mixins};
