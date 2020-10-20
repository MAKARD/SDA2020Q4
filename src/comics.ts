import { Item } from './item';
import { Pages } from './pages';

export class Comics extends Item {
  protected author: string;
  protected title: string;
  protected artist: string;

  constructor(title: string, author: string, artist: string, pages: Pages) {
    super(pages);

    this.author = author;
    this.title = title;
    this.artist = artist;
  }

  public toString = () => {
    return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.length}`;
  }
}
