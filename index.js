const inquirer = require('inquirer');
const fs = require('fs')
const { Circle, Square, Triangle} =  require('./lib/shapes')

const SVG = require('./lib/createsvg')

inquirer
    .createPromptModule([
        {
            type: 'list',
            message: 'Shape type',
            name: 'shape',
            choices: ['circle', 'square', 'triangle']
        }
    ])
    .then((response) => {
        console.log(response.shape)
        let shape;

        shape = new Circle()
        const svg = new SVG()

        svg.chosenShape(shape)
        
    })