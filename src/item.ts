import { Pages } from "./pages";
import { PagesIterable } from "./pagesIterable";

abstract class Item_ {
  public abstract toString(): string;

  public pages: Pages;

  constructor(pages: Pages) {
    this.pages = pages;
  }
}

export const Item = PagesIterable(Item_)
