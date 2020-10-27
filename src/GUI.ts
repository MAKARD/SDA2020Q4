import { Shipment } from './Shipment';

export class GUI {
  public on = (eventType: string, callback: (state: Shipment) => void) => {
    throw new Error('Not implemented');
  }

  public trigger = (eventType: string, state: Shipment) => {
    throw new Error('Not implemented');
  }
}
