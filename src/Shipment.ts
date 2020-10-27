import { Shipper } from './Shipper';

interface ShipmentState {
  shipmentId: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: Array<string>;
}

export class Shipment {
  private state: ShipmentState;
  private shipper: Shipper;

  constructor(state: Omit<ShipmentState, 'shipmentId'>) {
    this.state = {
      shipmentId: Date.now(),
      weight: state.weight
    } as ShipmentState;

    this.setFromAddress(state.fromAddress);
    this.setToAddress(state.toAddress);
    this.setFromZipCode(state.fromZipCode);
    this.setToZipCode(state.toZipCode);
    state.marks && this.setMarks(state.marks);

    this.shipper = new Shipper(state.fromZipCode, state.weight);
  }

  public getShipmentID = () => {
    return this.state.shipmentId;
  }

  public getToAddress = () => this.state.toAddress;
  public getFromAddress = () => this.state.fromAddress;
  public getToZipCode = () => this.state.toZipCode;
  public getFromZipCode = () => this.state.fromZipCode;
  public getWeight = () => this.state.weight;
  public getMarks() {
    return this.state.marks || [];
  }

  public setToAddress = (toAddress: string) => {
    this.state.toAddress = toAddress;
  }

  public setFromAddress = (fromAddress: string) => {
    this.state.fromAddress = fromAddress;
  }

  public setToZipCode = (toZipCode: string) => {
    if (toZipCode.length !== 5) {
      throw new Error("Zip code should contain exactly 5 chars");
    }

    this.state.toZipCode = toZipCode;
  }

  public setFromZipCode = (fromZipCode: string) => {
    if (fromZipCode.length !== 5) {
      throw new Error("Zip code should contain exactly 5 chars");
    }

    this.state.fromZipCode = fromZipCode;
  }

  public setMarks = (marks: Array<string>) => {
    this.state.marks = marks;
  }

  public ship = () => {
    const shipmentId = `shipmentId: ${this.getShipmentID()}`;
    const from = `from: ${this.getFromAddress()}/${this.getFromZipCode()}`;
    const to = `to: ${this.getToAddress()}/${this.getToZipCode()}`;
    const cost = `cost: ${this.shipper.getCost(this.getWeight())}`;
    const marks = this.getMarks().map((mark) => `**MARK ${mark.toUpperCase()}**`).join('\n');

    return [shipmentId, from, to, cost].join(', ').trim() + `\n${marks}`;
  }
}
