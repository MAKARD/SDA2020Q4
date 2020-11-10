import Currencies from './data/currencies.json';

import { Block } from './components';

import { CurrencyController } from './controllers/CurrencyController';
import { AppearanceController } from './controllers/AppearanceController';

import { CurrencySectionSlider } from './views/CurrencySectionSlider';
import { CurrencySectionInput } from './views/CurrencySectionInput';
import { Currency } from './global';

const root = document.getElementById('root')!;

const initializeControllers = () => {
  Object.keys(Currencies).forEach((key) => {
    const block = Block({
      id: `${key}Block`,
      children: []
    });

    root.appendChild(block);

    const Controller = new AppearanceController(CurrencyController, key as Currency, {
      input: CurrencySectionInput,
      slider: CurrencySectionSlider
    });

    Controller.render(block)
  });
}

initializeControllers();
