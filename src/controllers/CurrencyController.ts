import { Currency, View } from "../global";

import { Converter } from '../models/Converter';

export class CurrencyController {
  private view: View;
  private type: Currency;

  private parentValue: number;
  private childValue: number;
  private converter = new Converter();

  constructor(view: View, type: Currency) {
    this.view = view;
    this.type = type;
    this.parentValue = 100;
    this.childValue = this.converter.getAmountForCurrencyForward(this.parentValue, type);
  }

  public render(root: HTMLElement) {
    const element = this.view(
      (value, executor) => {
        const parsedValue = parseFloat(value);
        if (executor === 'childCurrency') {
          this.parentValue = this.converter.getAmountForCurrencyBackward(parsedValue, this.type);
          this.childValue = parsedValue;
        }

        if (executor === 'parentCurrency') {
          this.childValue = this.converter.getAmountForCurrencyForward(parsedValue, this.type);
          this.parentValue = parsedValue;
        }

        this.render(root);
      },
      {
        parentCurrency: this.parentValue,
        childCurrency: this.childValue
      }
    );

    root.innerHTML = '';

    root.appendChild(element);
  }
}
