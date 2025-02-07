import { SearchSelectors } from "./search.selectors";
import { expect, Page } from "@playwright/test";
import { SearchResults } from "./search.types";

export class SearchValidator {
  private readonly selectors: SearchSelectors;

  constructor(page: Page) {
    this.selectors = new SearchSelectors(page);
  }

  public async validateCasinoSearchResults(
    options: SearchResults,
  ): Promise<void> {
    await expect(this.selectors.casinoGameCard).toHaveCount(
      options.expectedNumberOfResults,
    );
  }

  public async validateSportsSearchResults(): Promise<void> {
    await expect(this.selectors.matchCard.nth(1)).toBeVisible();
    await expect(this.selectors.betCard.nth(1)).toBeVisible();
  }
}
