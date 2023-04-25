const inquirer = require('inquirer');
const fs = require('fs')
const { Circle, Square, Triangle } = require('./lib/shapes')
const SVG = require('./lib/createsvg')

inquirer
    .prompt([
        {
            type: 'list',
            message: 'Choose a shape type:',
            name: 'shape',
            choices: ['circle', 'square', 'triangle']
        },

        {
            type: 'input',
            message: 'Enter text for the logo (up to 3 characters):',
            name: 'text',
            validate: (input) => {
                if (input.length > 3) {
                    return 'Text must be 3 characters or fewer.';
                }
                return true;
            },
        },

        {
            type: 'input',
            message: 'Enter a color for the text (hexadecimal value):',
            name: 'textColor',
        },

        {
            type: 'input',
            message: 'Enter a color for the shape (hexadecimal value):',
            name: 'shapeColor',
        },
    ])

    .then((answers) => {
        let shape;

        switch (answers.shape) {
            case 'circle':
                shape = new Circle();
                break;
            case 'square':
                shape = new Square();
                break;
            case 'triangle':
                shape = new Triangle();
                break;
        }

        shape.setColor(answers.shapeColor);
        const svg = new SVG();
        svg.setChosenText(answers.text);
        svg.setChosenShape(shape);
        svg.setTextColor(answers.textColor);

        const svgString = svg.render();
        fs.writeFileSync('logo.svg', svgString);
        console.log('Generated logo.svg');
    })

    .catch((err) => {
        console.error(err);
    })




