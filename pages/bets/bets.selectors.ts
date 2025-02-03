import { Locator, Page } from "@playwright/test";

export class BetsSelectors {
  private page: Page;

  public readonly inputStake: Locator;

  public readonly buttonPlaceBet: Locator;

  public readonly modalBetsPlaced: Locator;

  constructor(page: Page) {
    this.page = page;

    this.inputStake = page.locator("input[data-testid='stake-input']");

    this.buttonPlaceBet = page.locator(
      "button[data-testid='place-bet-button']",
    );

    this.modalBetsPlaced = page.locator("div[data-testid='betslip-floater']");
  }

  public buttonOutcome(index = 0): Locator {
    return this.page.locator("button[data-testid='outcome-button']").nth(index);
  }
}
