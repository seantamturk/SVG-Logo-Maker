class Shape {
    constructor() {
        this.color = ''
    }

    shapeColor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80"
        stroke="green" stroke-width="4" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80"
        stroke="green" stroke-width="4" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80"
        stroke="green" stroke-width="4" fill="${this.color}" />`
    }
}





module.exports = { Circle, Square, Triangle}
