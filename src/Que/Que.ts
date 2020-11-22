import { QueItem } from '../QueItem';

export class Que<T> {
  private _items: Array<QueItem<T>> = [];

  constructor(items: Array<QueItem<T>>) {
    this._items = [...items].sort((prevItem, nextItem) => prevItem.priority - nextItem.priority);
  }

  public insert(newItem: QueItem<T>) {
    const pasteIndex = this._items.reduce((minIndex, item, index) => {
      if (newItem.priority > item.priority) {
        return index;
      }

      return minIndex;
    }, -1);

    if (pasteIndex === -1) {
      this._items = [
        newItem,
        ...this._items,
      ];

      return;
    }

    this._items = [
      ...this._items.slice(0, pasteIndex + 1),
      newItem,
      ...this._items.slice(pasteIndex + 1),
    ];
  }

  private removeBy(predicate: (item: QueItem<T>) => boolean) {
    const removeIndex = this._items.findIndex(predicate);

    if (removeIndex === -1) {
      return;
    }

    this._items = [
      ...this._items.slice(0, removeIndex),
      ...this._items.slice(removeIndex + 1),
    ];
  }

  public removeByPriority(priority: number) {
    this.removeBy((item) => item.priority === priority);
  }

  public removeById(id: string) {
    this.removeBy((item) => item.id === id);
  }

  public getMaximum() {
    return this._items[this._items.length - 1];
  }

  public getMinimum() {
    return this._items[0];
  }

  public extractMaximum() {
    return this._items.pop();
  }

  public extractMinimum() {
    const min = this.getMinimum();

    this._items = [
      ...this._items.slice(1)
    ];

    return min;
  }

  public getItemById(id: string) {
    return this._items.find((item) => item.id === id);
  }

  public getItemByPriority(priority: number) {
    return this._items.find((item) => item.priority === priority);
  }

  public get list() {
    return [
      ...this._items
    ];
  }
}
