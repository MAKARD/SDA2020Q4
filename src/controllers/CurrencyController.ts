import { Currency, View } from "../global";

import { Converter } from '../models/Converter';

export class CurrencyController {
  private view: View;
  private prevView: HTMLElement;
  private type: Currency;

  private parentValue: number;
  private childValue: number;
  private converter: Converter;

  constructor(view: (type: Currency) => View, type: Currency) {
    this.view = view(type);
    this.parentValue = 100;
    this.converter = new Converter(type);
    this.type = type;

    this.childValue = this.converter.getAmountForward(this.parentValue);
  }

  public setView = (view: (type: Currency) => View) => {
    this.view = view(this.type);
  }

  public render(root: HTMLElement) {
    if (this.prevView) {
      root.removeChild(this.prevView);
    }

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

    root.appendChild(element);
    this.prevView = element;
  }
}
