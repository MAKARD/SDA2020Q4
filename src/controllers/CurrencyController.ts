import { Currency, View } from "../global";

import { Converter } from '../models/Converter';

export class CurrencyController {
  private view: View;

  private parentValue: number;
  private childValue: number;
  private converter: Converter;

  constructor(view: (type: Currency) => View, type: Currency) {
    this.view = view(type);
    this.parentValue = 100;
    this.converter = new Converter(type);

    this.childValue = this.converter.getAmountForward(this.parentValue);
  }

  public render(root: HTMLElement) {
    const element = this.view(
      (value, executor) => {
        const parsedValue = parseFloat(value);
        if (executor === 'childCurrency') {
          this.parentValue = this.converter.getAmountBackward(parsedValue);
          this.childValue = parsedValue;
        }

        if (executor === 'parentCurrency') {
          this.childValue = this.converter.getAmountForward(parsedValue);
          this.parentValue = parsedValue;
        }

        this.render(root);
      },
      {
        parentCurrency: this.parentValue,
        childCurrency: this.childValue
      },
      this.converter.getRate()
    );

    root.innerHTML = '';

    root.appendChild(element);
  }
}
