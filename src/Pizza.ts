import { Consumable } from './Consumable';

export class Pizza extends Consumable {
  protected numberOfSlices: number;
  protected slicesEaten = 0;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super('pizza', 1, 1, spoiled);

    this.numberOfSlices = numberOfSlices;
  }

  public eat() {
    if (this.slicesEaten === this.numberOfSlices) {
      return super.eat();
    }

    this.slicesEaten++;

    if (this.slicesEaten >= this.numberOfSlices) {
      this.setConsumed(true);
    }

    return `You eat a slice of the ${this.name}.`;
  }
}
