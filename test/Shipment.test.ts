import { Shipment } from '../src/Shipment';

const fullDefaults = {
  toAddress: 'to address string',
  fromAddress: 'from address string',
  toZipCode: '12345',
  fromZipCode: '12345',
  weight: 80,
  marks: ['mark 1', 'mark 2']
}

const COST = .39;

jest.mock('../src/Shipper', () => {
  return {
    Shipper: jest.fn().mockReturnValue({
      getCost: () => COST
    })
  };
});

describe('Shipment', () => {
  it('should initialize corresponding getters', () => {
    const shipment = new Shipment(fullDefaults);

    expect(shipment.getFromAddress()).toBe(fullDefaults.fromAddress);
    expect(shipment.getToAddress()).toBe(fullDefaults.toAddress);
    expect(shipment.getToZipCode()).toBe(fullDefaults.toZipCode);
    expect(shipment.getFromZipCode()).toBe(fullDefaults.fromZipCode);
    expect(shipment.getWeight()).toBe(fullDefaults.weight);
    expect(shipment.getMarks()).toStrictEqual(fullDefaults.marks);
    expect(typeof shipment.getShipmentID()).toBe('number');
  });

  it('should initialize corresponding setters', () => {
    const shipment = new Shipment(fullDefaults);

    shipment.setToAddress('new to address');
    expect(shipment.getToAddress()).toBe('new to address');

    shipment.setFromAddress('new from address');
    expect(shipment.getFromAddress()).toBe('new from address');

    shipment.setFromZipCode('23456');
    expect(shipment.getFromZipCode()).toBe('23456');

    shipment.setToZipCode('23456');
    expect(shipment.getToZipCode()).toBe('23456');

    shipment.setMarks([]);
    expect(shipment.getMarks()).toStrictEqual([]);
  });

  it('should throw error on wrong zip code', () => {
    const shipment = new Shipment(fullDefaults);

    expect(() => shipment.setFromZipCode('123456')).toThrow();
    expect(() => shipment.setToZipCode('123456')).toThrow();
  });

  it('should generate shipment string on ship', () => {
    const shipment = new Shipment(fullDefaults);

    const shipmentId = `shipmentId: ${shipment.getShipmentID()}`;
    const from = `from: ${fullDefaults.fromAddress}/${fullDefaults.fromZipCode}`;
    const to = `to: ${fullDefaults.toAddress}/${fullDefaults.toZipCode}`;
    const cost = `cost: ${COST}`;
    const marks = fullDefaults.marks.map((mark) => `**MARK ${mark.toUpperCase()}**`).join('\n');

    expect(shipment.ship()).toBe(
      `${shipmentId}, ${from}, ${to}, ${cost}\n${marks}`
    );
  });
});
