import { Comparable } from './Comparable';

let id = 0;

const compareValues = (
    leftValue: string | number,
    rightValue: string | number
): 0 | 1 | -1 => {
    if (leftValue === rightValue) {
        return 0;
    }

    return leftValue > rightValue ? 1 : -1;
}

export abstract class Item implements Comparable<Item> {
    public static reset() {
        id = 0;
    }

    public id: number;
    public name: string;
    public value: number;
    public weight: number;

    constructor(name: string, value: number, weight: number) {
        this.name = name;
        this.weight = weight;
        this.value = value;

        this.id = id;

        id += 1;
    }

    public compareTo(other: Item) {
        const result = compareValues(this.value, other.value);

        return result
            ? result
            : compareValues(this.name.toLowerCase(), other.name.toLowerCase());
    }

    public toString() {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }
}
