import { ShipperEntity } from '../src/shippers/ShipperEntity';

class ShipperEntityStub extends ShipperEntity {
  protected zipCodeIdentifiers = [1, 2, 3];

  public cost = 1;
}

describe('Shipper', () => {
  it('should handle zip code', () => {
    const shipper = new ShipperEntityStub();

    expect(shipper.doesZipCodeMatch('12345')).toBeTruthy();
    expect(shipper.doesZipCodeMatch('45678')).toBeFalsy();
  });
});
