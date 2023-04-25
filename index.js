const inquirer = require('inquirer');
const fs = require('fs')
const { Circle, Square, Triangle } = require('./lib/shapes')
const SVG = require('./lib/createsvg')

const colorChoices = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];

inquirer
    .createPromptModule([
        {
            type: 'list',
            message: 'Choose a shape type:',
            name: 'shape',
            choices: ['circle', 'square', 'triangle']
        }

        {
            type: 'input'
            message: 'Enter text for the logo (up to 3 characters):',
            name: 'text'
            validate: (input) => {
                if (input.length > 3) {
                    return 'Text must be 3 characters or fewer.';
                }
                return true;
            },
        },
        {
            type: 'list',
            message: 'Choose a color for the text:',
            name: 'textColor',
            choices: colorChoices,
        },
    ])
    
    .then((response) => {
        console.log(response.shape)
        let shape;

        shape = new Circle()
        const svg = new SVG()

        svg.chosenShape(shape)

    })