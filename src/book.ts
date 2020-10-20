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

  public getTitle() {
    return this.title;
  }

  public setTitle(title: string) {
    this.title = title;
  }

  public getAuthor() {
    return this.author;
  }

  public setAuthor(author: string) {
    this.author = author;
  }

  public toString = () => {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.length}`;
  }
}
