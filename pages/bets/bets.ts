import { Navigation } from "../navigation/navigation";
import { Page } from "@playwright/test";
import { PlaceBetOptions, SportsCategory } from "./bets.types";
import { BetsSelectors } from "./bets.selectors";
import { BetsValidator } from "./bets.validator";

export class Bets {
  private readonly navigation: Navigation;
  private readonly selectors: BetsSelectors;

  public readonly validator: BetsValidator;

  constructor(page: Page) {
    this.navigation = new Navigation(page);
    this.selectors = new BetsSelectors(page);

    this.validator = new BetsValidator(page);
  }

  public async navigateToCategory(
    sportsCategory: SportsCategory,
  ): Promise<void> {
    await this.navigation.navigateTo(sportsCategory);
  }

  public async placeBet(options: PlaceBetOptions): Promise<void> {
    await this.selectors.buttonOutcome(options.indexOfOutcomeButton).click();
    await this.selectors.inputStake.fill(`${options.amount}`);
    await this.selectors.buttonPlaceBet.click();
  }

  public async openPlaceBetSidebar(): Promise<void> {
    await this.selectors.modalBetsPlaced.click();
  }

  public async clickPlaceBetButton(): Promise<void> {
    await this.selectors.buttonPlaceBet.click();
  }
}
