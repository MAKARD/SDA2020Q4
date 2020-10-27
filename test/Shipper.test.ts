import { Shipper } from '../src/Shipper';

describe('Shipper', () => {
  it('should set sipper according to zipCode', () => {
    expect(new Shipper('12345').getShipperName()).toBe('AirEastShipper');

    expect(new Shipper('45678').getShipperName()).toBe('ChicagoSprintShipper');

    expect(new Shipper('78900').getShipperName()).toBe('PacificParcelShipper');
  });
});
