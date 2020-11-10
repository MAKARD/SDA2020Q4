import Currencies from './data/currencies.json';
import { Currency } from './global';

import { Block } from './components';

import { CurrencyController } from './controllers/CurrencyController';
import { AppearanceController } from './controllers/AppearanceController';
import { SingleModeController } from './controllers/SingleModeController';

import { CurrencySectionSlider } from './views/CurrencySectionSlider';
import { CurrencySectionInput } from './views/CurrencySectionInput';

const root = document.getElementById('root')!;

const initializeControllers = (singleModeController: SingleModeController) => {
  Object.keys(Currencies).forEach((key) => {
    const block = Block({
      id: `${key}Block`,
      children: []
    });

    root.appendChild(block);

    const appearanceController = new AppearanceController(CurrencyController, key as Currency, {
      input: CurrencySectionInput,
      slider: CurrencySectionSlider
    });

    singleModeController.appendController(appearanceController.controller);
    appearanceController.render(block)
  });
}

const singleModeController = new SingleModeController();
singleModeController.render(root);

initializeControllers(singleModeController);
