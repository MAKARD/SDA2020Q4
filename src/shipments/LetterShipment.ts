import { ShipmentEntity } from './ShipmentEntity';

export class LetterShipment extends ShipmentEntity {
  protected readonly weightLimit = 15;

  protected readonly weightLimitType = 'included';
}
