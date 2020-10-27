import * as Shipments from './shipments';
import { ShipmentEntity } from './shipments/ShipmentEntity';

export class ShipmentType {
  private shipment: ShipmentEntity;

  constructor(weight: number) {
    this.shipment = Object.values(Shipments)
      .map((Shipment) => new Shipment())
      .find((shipment) => shipment.doesWeightMatch(weight))!;
  }

  public getTypeName() {
    return this.shipment.constructor.name;
  }
}
