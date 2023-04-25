const { Triangle, Square, Circle } = require('./shapes');

describe('Tests all Shapes', () => {
    describe('Triangle Test', () => {
        it('should render a triangle with correct properties', () => {
            // Arrange
            const shape = new Triangle();
            shape.setColor('red');

            // Act
            const result = shape.render();

            // Assert
            expect(result).toContain(`<polygon points="150 20, 280 180, 20 180" fill="red" />`);
        });
    });

    describe('Square Test', () => {
        it('should render a square with correct properties', () => {
            // Arrange
            const shape = new Square();
            shape.setColor('blue');

            // Act
            const result = shape.render();

            // Assert
            expect(result).toContain(`<rect x="50" y="50" width="200" height="200" fill="blue" />`);
        });
    });

    describe('Circle Test', () => {
        it('should render a circle with correct properties', () => {
            // Arrange
            const shape = new Circle();
            shape.setColor('green');

            // Act
            const result = shape.render();

            // Assert
            expect(result).toContain(`<circle cx="150" cy="100" r="80" fill="green" />`);
        });
    });
});
