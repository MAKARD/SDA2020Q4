import { Item } from './item';
import { Pages } from './pages';

export class Magazine extends Item {
  protected title: string;

  constructor(title: string, pages: Pages) {
    super(pages);

    this.title = title;
  }

  public getTitle() {
    return this.title;
  }

  public setTitle(title: string) {
    this.title = title;
  }

  public toString = () => {
    return `Magazine: ${this.title} with number of pages: ${this.pages.length}`;
  }
}
