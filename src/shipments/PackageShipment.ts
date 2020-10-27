import { ShipmentEntity } from './ShipmentEntity';

export class PackageShipment extends ShipmentEntity {
  protected readonly weightLimit = 160;

  protected readonly weightLimitType = 'included';
}
