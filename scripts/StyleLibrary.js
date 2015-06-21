let colors = {
    baseOrange: "#FF9800",
    lightOrange: "#FFECB3",
};

let borders = {
    orangeBorder: `1px solid ${colors.baseOrange}`,
    lightOrangeBorder: `1px solid ${colors.lightOrange}`,
};

let mixins = {
    centerBox({height, width}) {
        return {
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "width": `${width}px`,
            "height": `${height}px`,
            "margin-left": `-${(width/2)}px`,
            "margin-top": `-${(height/2)}px`,
        }
    },

    fullBox() {
        return {
            "position": "absolute",
            "top": "0px",
            "bottom": "0px",
            "left": "0px",
            "right": "0px",
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
        }
    },

    patternBackground() {
        return {
            "background": "url(\"/static/assets/crossword.png\")"
        }
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
        }
    },
};

export default {colors, borders, mixins};
