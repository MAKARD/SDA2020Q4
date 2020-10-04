import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
  constructor(...points: [Point, Point, Point]) {

    super(points);
  }

  public toString() {
    const pointsList = this.points
      .map((point, index) => `v${index + 1}=${point}`)
      .join(', ')
      .trim();

    return `Triangle[${pointsList}]`;
  }

  private getAngles() {
    return this.points.map((point, index) => {
      const nextPoint = this.points[index + 1] || this.points[0];
      return Math.cos(point.distance(nextPoint)).toFixed(3);
    });
  }

  private get isEquilateral() {
    const angles = this.getAngles();

    return angles.every((angle) => angle === angles[0]);    
  }

  private get isIsosceles() {
    const angles = this.getAngles();

    return !!angles.filter((angle, index) => angle === angles[index + 1]).length;
  }

  private get isScalene() {
    return !this.isIsosceles;
  }

  public getType() {
    if (this.isEquilateral) {
      return 'equilateral triangle';
    }

    if (this.isIsosceles) {
      return 'isosceles triangle';
    }

    if (this.isScalene) {
      return 'scalene triangle';
    }

    return 'unknown'
  }
}
