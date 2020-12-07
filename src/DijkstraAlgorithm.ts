import { Node } from './Node';
import { Algorithm } from './ShortestRoute';

const NULL_NODE = new Node();
export class DijkstraAlgorithm implements Algorithm {
  private graph: Array<Node> = [];

  public set = (graph: Array<Node>) => {
    this.graph = graph;
  }

  public execute = (from: Node, to: Node) => {
    const path: Array<Node> = [from];

    let cursor = from;

    while (cursor.siblings.length) {
      const toSibling = cursor.getSibling(to.id);

      if (toSibling) {
        path.push(toSibling.node);
        cursor = NULL_NODE;
        continue;
      }

      cursor.siblings.forEach((sibling) => {
        // sibling.weight;
      });
    }
    // from.siblings.forEach((sibling) => {
    //   if (sibling.node === to) {
    //     path.push()
    //   }
    // });
    // this.graph.find((node) => node === from);

    return this.graph;
  }
}
