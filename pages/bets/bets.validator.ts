import { BetsSelectors } from "./bets.selectors";
import { expect, Page } from "@playwright/test";

export class BetsValidator {
  private readonly selectors: BetsSelectors;

  constructor(page: Page) {
    this.selectors = new BetsSelectors(page);
  }

  public async validateBetsPlacedModalIsVisible(): Promise<void> {
    await expect(this.selectors.modalBetsPlaced).toBeVisible();
  }
}
