import { Locator, Page } from "@playwright/test";

export class SearchSelectors {
  public readonly buttonSearch: Locator;
  public readonly buttonTabCasino: Locator;
  public readonly buttonTabSports: Locator;

  public readonly inputSearch: Locator;

  public readonly casinoGameCard: Locator;
  public readonly matchCard: Locator;
  public readonly betCard: Locator;

  constructor(page: Page) {
    this.buttonSearch = page.locator('button[data-testid="search-button"]');
    this.buttonTabCasino = page.locator('button[data-testkey="casino"]');
    this.buttonTabSports = page.locator('button[data-testkey="sports"]');

    this.inputSearch = page.locator('input[data-testid="search-input"]');

    this.casinoGameCard = page.locator('a[data-testid="casino-game-card"]');
    this.matchCard = page.locator('div[data-testid="match-container"]');
    this.betCard = page.locator(
      'div[style*="display: flex; flex-flow: row; gap: 16px; align-items: center;"]',
    );
  }
}
