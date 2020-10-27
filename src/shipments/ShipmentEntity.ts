export abstract class ShipmentEntity {
  protected abstract readonly weightLimit: number;
  protected abstract readonly weightLimitType: 'included' | 'heavier';

  public doesWeightMatch(weight: number) {
    if (this.weightLimitType === 'included') {
      return weight <= this.weightLimit;
    }

    return weight > this.weightLimit;
  }
}
