import { ShipmentType } from '../src/ShipmentType';

describe('ShipmentType', () => {
  it('should set shipment according to weight', () => {
    expect(new ShipmentType(15).getTypeName()).toBe('LetterShipment');

    expect(new ShipmentType(160).getTypeName()).toBe('PackageShipment');

    expect(new ShipmentType(161).getTypeName()).toBe('OversizedShipment');
  }); 
});
