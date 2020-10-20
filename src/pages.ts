import { Page } from "./page";

export class Pages {
  public list: Array<Page>;

  constructor(list: Array<Page>) {
    this.list = list;
  }

  public get length() {
    return this.list.length;
  }

  public withMergedToString(toString: () => string, page: Page) {
    return {
      ...page,
      toString: () => {
        return `${toString()}, ${page.toString()}`
      }
    }
  }
}
