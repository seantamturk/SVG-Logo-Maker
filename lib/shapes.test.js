const { Triangle, Square, Circle } = require('./shapes');

describe('Tests all Shapes', () => {
    describe('Triangle Test', () => {
        it('should render a triangle with correct properties', () => {
            // Arrange
            const title = 'testTitle';
            const textColor = 'black';
            const shapeColor = 'grey';
            const testTriangle = new Triangle(title, textColor, shapeColor);

            // Act
            const result = testTriangle.render();

            // Assert
            expect(result).toContain(`<svg height="300" width="200" viewBox="0 0 100 100"><polygon points="50 0, 100 100, 0 100" fill="${shapeColor}"/><text x="55" y="75" font-size="15" fill="${textColor}">${title}</text></svg>`);
        });
    });

    describe('Square Test', () => {
        it('should render a square with correct properties', () => {
            // Arrange
            const title = 'testSquare';
            const textColor = 'red';
            const shapeColor = 'blue';
            const testSquare = new Square(title, textColor, shapeColor);

            // Act
            const result = testSquare.render();

            // Assert
            expect(result).toContain(`<svg height="300" width="200" viewBox="0 0 100 100"><rect width="70%" height="70%" fill="${shapeColor}" x="15" y="15"/><text x="50" y="75" font-size="15" fill="${textColor}">${title}</text></svg>`);
        });
    });

    describe('Circle Test', () => {
        it('should render a circle with correct properties', () => {
            // Arrange
            const title = 'testcircle';
            const textColor = 'black';
            const shapeColor = 'red';
            const testCircle = new Circle(title, textColor, shapeColor);

            // Act
            const result = testCircle.render();

            // Assert
            expect(result).toContain(`<svg height="300" width="200"><circle cx="100" cy="100" r="100" fill="${shapeColor}" /><text x="50" y="150" font-size="35" fill="${textColor}">${title}</text></svg>`);
        });
    });
});
