export type PageType = 'with text' | 'with article' | 'with images' | 'with some content';
export type PageMaterial = 'paper' | 'simple paper' | 'glossy paper';

export class Page {
  protected pageNumber: number;
  protected pageType: PageType;
  protected pageMaterial: PageMaterial;

  constructor(pageNumber: number, pageType: PageType, pageMaterial: PageMaterial) {
    this.pageMaterial = pageMaterial;
    this.pageNumber = pageNumber;
    this.pageType = pageType;
  }

  public toString() {
    return `here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterial}`;
  }
}
