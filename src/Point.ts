export class Point {
  public x: number;
  public y: number;

  constructor();
  constructor(x: number, y: number);

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  public toString() {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(x: number, y: number): number;
  public distance(target: Point): number;

  public distance(xOrTarget?: number | Point, y = 0) {
    const getPoints = () => {
      if (xOrTarget instanceof Point) {
        const { x, y } = xOrTarget;
        return { x, y };
      }

      return { x: xOrTarget || 0, y };
    }

    const targetPoint = getPoints();

    return Math.sqrt(
      Math.pow(targetPoint.x - this.x, 2) + Math.pow(targetPoint.y - this.y, 2)
    );
  }
}
