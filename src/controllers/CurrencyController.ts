import { Currency, View } from "../global";

import { Converter } from '../models/Converter';

export class CurrencyController {
  private view: View;
  private prevView: HTMLElement;
  private type: Currency;

  public root: HTMLElement;

  public parentValue: number;
  private childValue: number;
  private converter: Converter;
  public  onChangeParentValue: (value: number) => void = () => {};

  constructor(
    view: (type: Currency) => View,
    type: Currency,
  ) {
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
    this.root = root;

    if (this.prevView) {
      root.removeChild(this.prevView);
    }

    const element = this.view(
      (value, executor) => {
        this.calculate(value, executor);

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

  public calculate = (
    value: string, 
    executor: "parentCurrency" | "childCurrency",
    withCallback: boolean = true
    ) => {
      const parsedValue = parseFloat(value);
      if (executor === 'childCurrency') {
        this.parentValue = this.converter.getAmountBackward(parsedValue);
        this.childValue = parsedValue;
      }

      if (executor === 'parentCurrency') {
        this.childValue = this.converter.getAmountForward(parsedValue);
        this.parentValue = parsedValue;
        withCallback && this.onChangeParentValue(this.parentValue);
      }
  }
}
