import { MarkShipment } from '../src/MarkShipment';
import { Shipment } from '../src/Shipment';

const fullDefaults = {
  toAddress: 'to address string',
  fromAddress: 'from address string',
  toZipCode: '12345',
  fromZipCode: '12345',
  weight: 80,
  marks: []
}

describe('MarkShipment', () => {
  it('should create marked shipment', () => {
    // Looks redundant, weird, not user friendly, but according to technical requirements
    @MarkShipment(['Do Not Leave', 'Fragile', 'Return Receipt Requested'])
    class MarkedShipment extends Shipment {};

    expect(new MarkedShipment(fullDefaults).getMarks()).toStrictEqual(['Do Not Leave', 'Fragile', 'Return Receipt Requested']);
  });
});
