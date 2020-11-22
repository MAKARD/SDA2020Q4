import { Que } from "./Que";
import { QueItem } from "../QueItem";

export class QueWrapper<T> {
  private que = new Que<T>([]);

  constructor(items?: Array<QueItem<T> | T>) {
    if (!Array.isArray(items)) {
      return;
    }

    const [checkSample] = items;

    if (!checkSample) {
      return;
    }

    if (checkSample instanceof QueItem) {
      this.que = new Que(items as Array<QueItem<T>>);
    } else {
      this.que = new Que((items as Array<T>).map((value, priority) => new QueItem(value, priority)));
    }
  }

  public insert(value: T, priority: number): void;
  public insert(item: QueItem<T>): void;

  public insert(item: T | QueItem<T>, priority?: number) {
    if (item instanceof QueItem) {
      return this.que.insert(item);
    }

    const queItem = new QueItem(item, priority || this.que.items.length - 1);

    return  this.que.insert(queItem);
  }
}
