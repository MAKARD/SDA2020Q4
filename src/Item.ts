import { Comparable } from './Comparable';

let id = 0;

const compareValues = (
  leftValue: string | number,
  rightValue: string | number
): 0 | 1 | -1 => {
  if (leftValue === rightValue) {
    return 0;
  }

  return leftValue > rightValue ? 1 : -1;
}

export abstract class Item implements Comparable<Item> {
  public static get numberOfItems() {
    return id;
  }

  public static reset() {
    id = 0;
  }

  protected id: number;
  public name: string;
  public value: number;
  public weight: number;

  constructor(name: string, value: number, weight: number) {
    this.name = name;
    this.value = value;
    this.weight = weight;

    id += 1;
  }

  public getId() {
    return this.id;
  }

  public getWeight() {
    return this.weight.toFixed(2);
  }

  public compareTo(other: Item) {
    const result = compareValues(this.value, other.value);

    return result
      ? result
      : compareValues(this.name.toLowerCase(), other.name.toLowerCase());
  }

  public toString() {
    const valueText = `Value: ${this.value}`;
    const weightText = `Weight: ${this.weight.toFixed(2)}`;

    return `${this.name} - ` + [valueText, weightText].join(', ').trim();
  }
}
