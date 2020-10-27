import * as Shippers from './shippers';
import { ShipperEntity } from './shippers/ShipperEntity';

export class Shipper {
  private shipper: ShipperEntity;

  constructor(zipCode: string) {
    this.shipper = Object.values(Shippers)
      .map((Shipper) => new Shipper())
      .find((shipper) => shipper.doesZipCodeMatch(zipCode)) || new Shippers.AirEastShipper();
  }

  public getShipperName = () => {
    return this.shipper.constructor.name;
  }

  public getCost() {
    return this.shipper.cost;
  }
}
