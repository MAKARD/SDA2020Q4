import { Node } from './Node';

export interface Algorithm {
  set: (graph: Array<Node>) => void;
  execute: (from: Node, to: Node) => Array<Node>;
}

export class ShortestRoute {
  private algorithm: Algorithm;

  constructor(algorithm: Algorithm, graph: Array<Node>) {
    this.algorithm = algorithm;

    algorithm.set(graph);
  }

  public find(from: Node, to: Node): Array<Node> {
    return this.algorithm.execute(from, to);
  }
}
