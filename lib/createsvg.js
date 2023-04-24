class SVG {
    constructor(){
        this.chosenText = '';
        this.chosenShape = ''
    }

    render(){
        return`<svg width="300" height="200"></svg>`
    }

    

    shapeData(shape){
        this.chosenShape = shape.render()
    }
}

module.exports = SVG