import { Page, PageMaterial, PageType } from "./page";
import { Pages } from "./pages";

export class PageFactory {
  public static createPages = (config: Array<{
    pageNumber: number;
    pageType: PageType;
    pageMaterial: PageMaterial;
  }>) => {
    return new Pages(config.map(({
      pageNumber,
      pageType,
      pageMaterial
    }) =>
      new Page(pageNumber, pageType, pageMaterial)
    ));
  }
}
