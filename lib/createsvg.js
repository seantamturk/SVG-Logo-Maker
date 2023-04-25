class SVG {
    constructor() {
        this.chosenText = '';
        this.chosenShape = '';
        this.textColor = '';
    }

    render() {
        return `
            <svg width="300" height="200">
                ${this.chosenShape}
                <text x="147" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">
                    ${this.chosenText}
                </text>
            </svg>
        `;
    }

    //Truncates text longer than 3 characters 
    setChosenText(text) {
        this.chosenText = text.slice(0, 3);
    }

    setChosenShape(shape) {
        this.chosenShape = shape.render();
    }

    setTextColor(color) {
        this.textColor = color;
    }
}

module.exports = SVG