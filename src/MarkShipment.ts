import { Shipment } from "./Shipment";

type Marks = 'Fragile' | 'Do Not Leave' | 'Return Receipt Requested';

export const MarkShipment = (marks: Array<Marks>) => (Target: typeof Shipment) => {
  return class extends Target {
    public getMarks() {
      return [
        ...super.getMarks(),
        ...marks
      ]
    }
  }
}
