import { Node, WeightedNode } from './Node';
import { Algorithm } from './ShortestRoute';

const NULL_NODE = new Node([]);
export class DijkstraAlgorithm implements Algorithm {
  private graphMap: Record<string, Node> = {};
  private adjacencyMatrix: Record<string, Record<string, number>> = {};
  private visitedNodesIds: Array<string> = [];
  private idsVector: Record<string, string> = {};

  public getAdjacencyMatrix() {
    return { ...this.adjacencyMatrix };
  }

  public getGraphMap() {
    return { ...this.graphMap };
  }

  public reset = () => {
    this.graphMap = {};
    this.adjacencyMatrix = {};
    this.visitedNodesIds = [];
  }

  public execute = async (from: Node) => {
    return new Promise<void>(async (resolve) => {
      const adjacencyRow: Record<string, number> = {};

      let cursor = from;

      while (cursor.siblings.length) {
        this.visitedNodesIds.push(cursor.id);

        cursor.siblings.forEach(this.proceedWeight(cursor.id, adjacencyRow));

        this.adjacencyMatrix[cursor.id] = adjacencyRow;
        const nextNodeId = this.getMinInRow(cursor.id);

        cursor = nextNodeId
          ? this.graphMap[nextNodeId]
          : NULL_NODE;
      }

      resolve();
    });
  }

  private getMinInRow(rowId: string) {
    return Object.keys(this.adjacencyMatrix[rowId]).reduce((minKey, key) => {
      if (this.visitedNodesIds.includes(key)) {
        return minKey;
      }

      return (this.adjacencyMatrix[rowId][minKey] || Infinity) > this.adjacencyMatrix[rowId][key]
        ? key
        : minKey;
    }, "");
  }

  private proceedWeight = (
    rowId: string,
    adjacencyRow: Record<string, number>
  ) => (sibling: WeightedNode) => {
    this.graphMap[sibling.node.id] = sibling.node;

    if (!adjacencyRow[rowId]) {
      this.idsVector[sibling.node.id] = rowId;
      adjacencyRow[sibling.node.id] = sibling.weight;

      return;
    }

    const currentWeight = adjacencyRow[sibling.node.id] || Infinity;
    const nextWeight = adjacencyRow[rowId] + sibling.weight;

    if (currentWeight > nextWeight) {
      this.idsVector[sibling.node.id] = rowId;
      adjacencyRow[sibling.node.id] = nextWeight;
    }
  }

  public async getPath(from: Node, to: Node) {
    return new Promise<Array<Node>>((resolve) => {
      const path = [to];

      let cursor = this.idsVector[to.id];

      while (cursor !== from.id) {
        path.push(this.graphMap[cursor]);
        cursor = this.idsVector[cursor];
      }

      path.push(from);

      return resolve(path.reverse());
    });
  }

  public getDistance(from: Node, to: Node) {
    return this.adjacencyMatrix[from.id][to.id];
  }
}
