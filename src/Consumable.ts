export class Consumable {
  protected name: string;
  protected value: number;
  protected weight: number;
  protected spoiled: boolean;
  protected consumed = false;

  constructor(
    name: string,
    value: number,
    weight: number,
    spoiled: boolean
  ) {
    this.name = name;
    this.value = value;
    this.weight = weight;
    this.spoiled = spoiled;
  }

  public eat() {
    if (this.isConsumed()) {
      return `There is nothing left of the ${this.name} to consume.`;
    }

    return `You eat the ${this.name}.`;
  }

  public use() {
    const eatResult = this.eat();

    if (this.isSpoiled()) {
      return `${eatResult}\nYou feel sick.`
    }

    return eatResult;
  }

  public isConsumed() {
    return this.consumed;
  }

  public setConsumed(consumed: boolean) {
    this.consumed = consumed;
  }

  public isSpoiled() {
    return this.spoiled;
  }

  public toString() {
    const valueText = `Value: ${this.value}`;
    const weightText = `Weight: ${this.weight.toFixed(2)}`;

    return `${this.name} - ` + [valueText, weightText].join(', ').trim();
  }
}