import { Que } from "./Que";
import { QueItem } from "../QueItem";

interface GetPredicate {
  id?: string;
  priority?: number;
}

interface BordersPredicate {
  max?: boolean;
  min?: boolean;
}

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

    const queItem = new QueItem(item, priority || this.que.list.length - 1);

    return this.que.insert(queItem);
  }

  public removeBy(predicate: GetPredicate) {
    if (predicate.id) {
      return this.que.removeById(predicate.id);
    }

    if (predicate.priority) {
      return this.que.removeByPriority(predicate.priority);
    }
  }

  public getItemBy(predicate: GetPredicate) {
    if (predicate.id) {
      return this.que.getItemById(predicate.id);
    }

    if (predicate.priority) {
      this.que.getItemByPriority(predicate.priority);
    }
  }

  public getBorders(predicate: BordersPredicate) {
    const borders: {
      min?: QueItem<T>,
      max?: QueItem<T>
    } = {};

    if (predicate.max) {
      borders.max = this.que.getMaximum();
    }

    if (predicate.min) {
      borders.min = this.que.getMinimum();
    }

    return borders;
  }

  public extractBorders(predicate: BordersPredicate) {
    const borders: {
      min?: QueItem<T>,
      max?: QueItem<T>
    } = {};

    if (predicate.max) {
      borders.max = this.que.extractMaximum();
    }

    if (predicate.min) {
      borders.min = this.que.extractMinimum();
    }

    return borders;
  }

  public get list() {
    return this.que.list;
  }
}
