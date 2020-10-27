export abstract class ShipperEntity {
  public abstract readonly cost: number;
  protected abstract readonly zipCodeIdentifiers: Array<number>;

  public doesZipCodeMatch(zipCode: string) {
    const [firstDigit] = zipCode.split('');

    return this.zipCodeIdentifiers.includes(Number(firstDigit));
  }
}
