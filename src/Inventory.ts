import { Item } from './Item';
import { ItemWeightComparator } from './ItemWeightComparator';

export class Inventory {
  protected items: Array<Item> = [];

  public addItem(item: Item) {
    this.items.push(item);
  }

  public sort(comparator?: ItemWeightComparator): Array<Item>;

  public sort(comparator?: ItemWeightComparator) {
    if (comparator) {
      return this.items.sort((first, second) => comparator.compare(first, second));
    }

    return this.items.sort((first, second) => first.compareTo(second));
  }

  public toString() {
    return this.items.map((item) => item.toString()).join(', ').trim();
  }
}