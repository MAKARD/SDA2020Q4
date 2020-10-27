import { ShipperEntity } from './ShipperEntity';

export class PacificParcelShipper extends ShipperEntity {
  public readonly cost = 51;


  protected readonly zipCodeIdentifiers = [7, 8, 9];
}
