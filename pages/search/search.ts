import { SearchSelectors } from "./search.selectors";
import { Locator, Page } from "@playwright/test";
import { SearchTab } from "./search.types";
import { SearchValidator } from "./search.validator";

export class Search {
  private readonly selectors: SearchSelectors;

  public readonly validator: SearchValidator;

  constructor(page: Page) {
    this.selectors = new SearchSelectors(page);

    this.validator = new SearchValidator(page);
  }

  public async openSearchModal(): Promise<void> {
    await this.selectors.buttonSearch.click();
  }

  public async searchFor(searchTerm: string): Promise<void> {
    await this.selectors.inputSearch.fill(searchTerm);
    await this.selectors.inputSearch.press("Enter");
  }

  public async switchTo(tab: SearchTab): Promise<void> {
    const tabToClick: Record<SearchTab, Locator> = {
      casino: this.selectors.buttonTabCasino,
      sports: this.selectors.buttonTabSports,
    };

    await tabToClick[tab].click();
  }
}
