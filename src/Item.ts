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

  public abstract use(): void;

  protected id: number;
  protected name: string;
  protected value: number;
  protected weight: number;

  constructor(name: string, value: number, weight: number) {
    this.setName(name);
    this.setValue(value);
    this.setWeight(weight);

    id += 1;
  }

  public getId() {
    return this.id;
  }

  public getValue() {
    return this.value;
  }

  public getName() {
    return this.name;
  }

  public getWeight() {
    return this.weight.toFixed(2);
  }

  public setValue(value: number) {
    this.value = value;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setWeight(weight: number) {
    this.weight = weight;
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
