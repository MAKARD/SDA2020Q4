import { ShipperEntity } from './ShipperEntity';

export class AirEastShipper extends ShipperEntity {
  public getCost(weight: number) {
    const defaultCharge = .39;

    switch (this.shipmentType.getTypeName()) {
      case 'LetterShipment': {
        return weight * defaultCharge;
      }
      case 'PackageShipment': {
        return weight * .25;
      }
      case 'OversizedShipment': {
        return weight * defaultCharge + 10;
      }
      default: {
        return weight * defaultCharge;
      }
    }
  };

  protected readonly zipCodeIdentifiers = [1, 2, 3];
}
