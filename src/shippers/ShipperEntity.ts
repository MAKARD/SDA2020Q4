import { ShipmentType } from '../ShipmentType';

export abstract class ShipperEntity {
  public abstract getCost(weight: number): number;
  protected abstract readonly zipCodeIdentifiers: Array<number>;

  protected shipmentType: ShipmentType;

  constructor(shipmentType: ShipmentType) {
    this.shipmentType = shipmentType;
  }

  public doesZipCodeMatch(zipCode: string) {
    const [firstDigit] = zipCode.split('');

    return this.zipCodeIdentifiers.includes(Number(firstDigit));
  }
}
