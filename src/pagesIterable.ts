import { Pages } from "./pages";

export interface PagesIterableTargetClass {
  new(...args: Array<any>): PagesIterableTargetClass;
  pages: Pages;
  toString(): string;
}

export const PagesIterable = (target: Function) => {
  const typedTarget = target as PagesIterableTargetClass;

  return class PagesIterable extends typedTarget {
    [Symbol.iterator]() {
      let index = -1;

      return {
        next: () => ({
          value: this.pages.withMergedToString(this.toString, this.pages.list[++index]),
          done: !(index in this.pages.list)
        })
      };
    }
  };
}
