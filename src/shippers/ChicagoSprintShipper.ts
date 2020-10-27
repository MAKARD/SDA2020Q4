import { ShipperEntity } from './ShipperEntity';

export class ChicagoSprintShipper extends ShipperEntity {
  public readonly cost = 42;

  protected readonly zipCodeIdentifiers = [4, 5, 6];
}
