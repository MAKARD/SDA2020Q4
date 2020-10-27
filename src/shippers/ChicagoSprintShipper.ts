import { ShipperEntity } from './ShipperEntity';

export class ChicagoSprintShipper extends ShipperEntity {
  public getCost(weight: number) {
    const defaultCharge = .42;

    switch (this.shipmentType.getTypeName()) {
      case 'LetterShipment': {
        return weight * defaultCharge;
      }
      case 'PackageShipment': {
        return weight * .20;
      }
      case 'OversizedShipment': {
        return 0;
      }
      default: {
        return weight * defaultCharge;
      }
    }
  };

  protected readonly zipCodeIdentifiers = [4, 5, 6];
}
