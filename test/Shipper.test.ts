import { Shipper } from '../src/Shipper';

describe('Shipper', () => {
  it('should set shipper according to zipCode', () => {
    expect(new Shipper('12345', 0).getShipperName()).toBe('AirEastShipper');

    expect(new Shipper('45678', 0).getShipperName()).toBe('ChicagoSprintShipper');

    expect(new Shipper('78900', 0).getShipperName()).toBe('PacificParcelShipper');
  });
});
