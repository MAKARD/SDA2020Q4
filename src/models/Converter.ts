import Currencies from '../data/currencies.json';
import { Currency } from '../global';

export class Converter {
  public getCurrencyRate = (currency: Currency) => {
    return Currencies[currency];
  }

  public getAmountForCurrencyForward = (targetAmount: number, currency: Currency) => {
    return targetAmount * Currencies[currency];
  }

  public getAmountForCurrencyBackward = (targetAmount: number, currency: Currency) => {
    return targetAmount / Currencies[currency];
  }
}
