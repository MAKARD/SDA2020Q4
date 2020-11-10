import Currencies from '../data/currencies.json';
import { Currency } from '../global';

export class Converter {
  public type: Currency;

  constructor(type: Currency) {
    this.type = type;
  }

  public getRate = () => {
    return Currencies[this.type];
  }

  public getAmountForward = (targetAmount: number) => {
    return targetAmount * this.getRate();
  }

  public getAmountBackward = (targetAmount: number) => {
    return targetAmount /this.getRate();
  }
}
