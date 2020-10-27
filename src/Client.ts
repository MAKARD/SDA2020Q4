import { Shipment } from './Shipment';
import { GUI } from './GUI';

export class Client {
  private gui: GUI;

  constructor(gui: GUI) {
    this.gui = gui;
  }

  private onShip = (shipment: Shipment) => {
    return shipment.ship();
  }
}
