import { nanoid } from "nanoid";

export interface WeightedNode {
  weight: number;
  node: Node;
}

export class Node {
  private _siblings: Array<WeightedNode>;
  public readonly id = nanoid();

  constructor(siblings: Array<WeightedNode> = []) {
    this._siblings = siblings;
  }

  public set siblings(siblings: Array<WeightedNode>) {
    this._siblings = siblings;
  }

  public get siblings() {
    return this._siblings;
  }

  public getSibling(id: string) {
    return this.siblings.find((sibling) => sibling.node.id === id);
  }
}
