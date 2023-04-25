const SVG = require('./createsvg');

describe('SVG', () => {
    let svg;

    beforeEach(() => {
        svg = new SVG();
    });

    describe('render', () => {
        it('returns a string with SVG code', () => {
            svg.setChosenText('abc');
            svg.setChosenShape({ render: () => '<circle cx="10" cy="10" r="5" />' });
            svg.setTextColor('#ff0000');
            expect(svg.render()).toBe(`
            <svg width="300" height="200">
                <circle cx="10" cy="10" r="5" />
                <text x="147" y="110" font-size="60" text-anchor="middle" fill="#ff0000">
                    abc
                </text>
            </svg>
        `);
        });
    });

    describe('setChosenText', () => {
        it('truncates text longer than 3 characters', () => {
            svg.setChosenText('abcd');
            expect(svg.chosenText).toBe('abc');
        });

        it('does not truncate text shorter than or equal to 3 characters', () => {
            svg.setChosenText('abc');
            expect(svg.chosenText).toBe('abc');

            svg.setChosenText('ab');
            expect(svg.chosenText).toBe('ab');

            svg.setChosenText('a');
            expect(svg.chosenText).toBe('a');
        });
    });

    describe('setChosenShape', () => {
        it('sets the chosen shape', () => {
            const shape = { render: () => '<circle cx="10" cy="10" r="5" />' };
            svg.setChosenShape(shape);
            expect(svg.chosenShape).toBe(shape.render());
        });
    });

    describe('setTextColor', () => {
        it('sets the text color', () => {
            svg.setTextColor('#ff0000');
            expect(svg.textColor).toBe('#ff0000');
        });
    });
});
