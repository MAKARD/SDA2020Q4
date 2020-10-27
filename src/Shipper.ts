import { ShipmentType } from './ShipmentType';
import * as Shippers from './shippers';
import { ShipperEntity } from './shippers/ShipperEntity';

export class Shipper {
  private shipper: ShipperEntity;

  constructor(zipCode: string, weight: number) {
    const shipmentType = new ShipmentType(weight);

    this.shipper = Object.values(Shippers)
      .map((Shipper) => new Shipper(shipmentType))
      .find((shipper) => shipper.doesZipCodeMatch(zipCode)) || new Shippers.AirEastShipper(shipmentType);
  }

  public getShipperName = () => {
    return this.shipper.constructor.name;
  }

  public getCost(weight: number) {
    return this.shipper.getCost(weight);
  }
}
