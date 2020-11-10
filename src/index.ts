import { CurrencyController } from './controllers/CurrencyController';
import { USDSection } from './views/USDSection';

const root = document.getElementById('root')!;

const USDController = new CurrencyController(USDSection, 'USD');
USDController.render(root)
