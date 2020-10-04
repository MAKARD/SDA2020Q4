import { Point } from './Point';

export abstract class Shape {
    abstract getType(): string;

    protected color: string;
    protected filled: boolean;
    protected points: Array<Point>;

    constructor(points: Array<Point>);
    constructor(points: Array<Point>, color: string, filled: boolean);

    constructor(points: Array<Point>, color = "green", filled = true) {
        if (points.length < 3) {
            throw new Error('Shape should receive at least 3 points'); 
        }

        this.points = points;
        this.color = color;
        this.filled = filled;
    }

    public toString() {
        const filledText = this.filled ? 'filled' : 'not filled';
        const points = this.points.join(', ').trim();

        return `A Shape with color of ${this.color} and ${filledText}. Points: ${points}.`;
    }

    public getPerimeter() {
        if (this.points.length > 3) {
            throw new Error('Not implemented');
        }

        return this.points.reduce((result, point, index) => {
            return result += point.distance(this.points[index + 1]);
        }, 0);
    }
}
