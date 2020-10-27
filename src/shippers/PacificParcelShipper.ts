import { ShipperEntity } from './ShipperEntity';

export class PacificParcelShipper extends ShipperEntity {
  public getCost(weight: number) {
    const defaultCharge = .51;

    switch (this.shipmentType.getTypeName()) {
      case 'LetterShipment': {
        return weight * defaultCharge;
      }
      case 'PackageShipment': {
        return weight * .19;
      }
      case 'OversizedShipment': {
        return weight * defaultCharge + weight * .2;
      }
      default: {
        return weight * defaultCharge;
      }
    }
  };

  protected readonly zipCodeIdentifiers = [7, 8, 9];
}
