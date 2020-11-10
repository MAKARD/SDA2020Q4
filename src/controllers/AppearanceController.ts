import { Block, Checkbox, Text } from "../components";
import { Currency, View } from "../global";
import { CurrencyController } from "./CurrencyController";

export class AppearanceController {
  public controller: CurrencyController;
  private viewRenderers: {
    slider: (type: Currency) => View,
    input: (type: Currency) => View,
  };

  private prevElement: HTMLElement;
  
  private currentView: 'slider' | 'input' = 'input';

  constructor(
    Controller: typeof CurrencyController,
    controllerType: Currency,
    viewRenderers: {
      slider: (type: Currency) => View,
      input: (type: Currency) => View,
    },
  ) {
    this.controller = new Controller(viewRenderers[this.currentView], controllerType);
    this.viewRenderers = viewRenderers;
  }

  public render = (root: HTMLElement) => {
    if (this.prevElement) {
      root.removeChild(this.prevElement);
    }

    this.prevElement =  Block({
      id: 'checkbox_wrapper',
      children: [
        Text({
          id: 'checkbox_text',
          value: 'slider view'
        }),
        Checkbox({
          id: 'checkbox',
          checked: this.currentView === 'slider',
          onChange: (value) => {
            this.currentView = value ? 'slider' : 'input';
            this.controller.setView(this.viewRenderers[this.currentView])

            this.render(root);
          }
        }),
      ]
    });

    root.appendChild(
      this.prevElement
    );

    this.controller.render(root);
  }
}
