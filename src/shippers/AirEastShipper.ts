import { ShipperEntity } from './ShipperEntity';

export class AirEastShipper extends ShipperEntity {
  public readonly cost = 39;

  protected readonly zipCodeIdentifiers = [1, 2, 3];
}
