import { nanoid } from 'nanoid';

export class QueItem<T> {
  private _value: T;
  private _priority: number;
  private readonly _id: string;

  constructor(value: T, priority: number) {
    this._value = value;
    this._priority = priority;
    this._id = nanoid();
  }

  public set priority(priority: number) {
    this._priority = priority;
  }

  public set value(value: T) {
    this._value = value;
  }

  public get priority() {
    return this._priority;
  }

  public get value() {
    return this._value;
  }

  public get id() {
    return this._id;
  }
}
