import { Node } from './Node';

export interface Algorithm {
  reset: () => void;
  execute: (from: Node) => Promise<void>;
  getPath: (from: Node, to: Node) => Promise<Array<Node>>;
  getDistance: (from: Node, to: Node) => number;
}

export class ShortestRoute {
  private algorithm: Algorithm;

  constructor(algorithm: Algorithm) {
    this.algorithm = algorithm;
  }

  public async find(from: Node, to: Node) {
    this.algorithm.reset();
    await this.algorithm.execute(from);

    return {
      route: await this.algorithm.getPath(from, to),
      distance: this.algorithm.getDistance(from, to)
    };
  }
}
