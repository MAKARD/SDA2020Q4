import { ShipmentEntity } from './ShipmentEntity';

export class OversizedShipment extends ShipmentEntity {
  protected readonly weightLimit = 160;

  protected readonly weightLimitType = 'heavier';
}
