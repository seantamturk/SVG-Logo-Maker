const inquirer = require('inquirer');
const fs = require('fs')
const { Circle, Square, Triangle } = require('./lib/shapes')
const SVG = require('./lib/createsvg')

//Validates hexidecimal
function validateColor(input) {
    if (input.match(/^[0-9a-fA-F]{6}$/) || input.match(/^[0-9a-fA-F]{3}$/)) {
        return true;
    } else {
        return 'Invalid color. Please enter a valid hexadecimal value.';
    }
}

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
            // validate: validateColor
        },

        {
            type: 'input',
            message: 'Enter a color for the shape (hexadecimal value):',
            name: 'shapeColor',
            // validate: validateColor
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
        
        const svg = new SVG();
        svg.setChosenText(answers.text);
        svg.setChosenShape(shape);
        svg.setTextColor(answers.textColor);
        shape.shapeColor(answers.shapeColor);

        const svgString = svg.render();
        fs.writeFileSync('logo.svg', svgString);
        console.log('Generated logo.svg');
    })

    .catch((err) => {
        console.error(err);
    })


    // .then((response) => {
    //     console.log(response.shape)
    //     let shape;

    //     shape = new Circle()
    //     const svg = new SVG()

    //     svg.chosenShape(shape)

    // })