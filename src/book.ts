import { Item } from './item';
import { Pages } from './pages';

export class Book extends Item {
  protected author: string;
  protected title: string;

  constructor(title: string, author: string, pages: Pages) {
    super(pages);

    this.author = author;
    this.title = title;
  }

  public toString = () => {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.length}`;
  }
}
