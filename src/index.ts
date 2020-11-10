import Currencies from './data/currencies.json';

import { Block } from './components';

import { CurrencyController } from './controllers/CurrencyController';
import { CurrencySection } from './views/CurrencySection';
import { Currency } from './global';

const root = document.getElementById('root')!;

const initializeControllers = () => {
  Object.keys(Currencies).forEach((key) => {
    const block = Block({
      id: `${key}Block`,
      children: []
    });

    root.appendChild(block);

    const Controller = new CurrencyController(CurrencySection, key as Currency);
    Controller.render(block)
  });
}

initializeControllers();