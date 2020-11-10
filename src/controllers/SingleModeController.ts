import { Block, Checkbox, Text } from '../components';
import { CurrencyController } from './CurrencyController';

export class SingleModeController {
  private controllers: CurrencyController[] = [];
  private isEnabled = false;
  private value = 100;

  public render = (root: HTMLElement) => {
    root.appendChild(
      Block({
        id: 'single_mode_wrapper',
        children: [
          Text({
            id: 'singleMode_checkbox_title',
            value: 'single mode'
          }),
          Checkbox({
            id: 'singleMode_checkbox',
            checked: this.isEnabled,
            onChange: (value) => {
              this.isEnabled = value;

              if (this.isEnabled) {
                this.controllers.forEach((controller) => {
                  controller.onChangeParentValue = (value) => {
                    this.value = value;

                    this.bindValueOnControllers();
                  }
                });
              } else {
                this.controllers.forEach((controller) => {
                  controller.onChangeParentValue = () => { };
                });
              }
            }
          })
        ]
      })
    );
  }

  private bindValueOnControllers = () => {
    this.controllers.forEach((controller) => {
      controller.parentValue = this.value;
      controller.calculate(this.value.toString(), 'parentCurrency', false);
      controller.render(controller.root);
    });
  }

  public appendController = (controller: CurrencyController) => {
    this.controllers.push(controller);
  }
}
