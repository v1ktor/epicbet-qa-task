import { NavigationSelectors } from "./navigation.selectors";
import { expect, Page } from "@playwright/test";
import { NavigateTo } from "./navigation.types";

export class Navigation {
  private readonly selectors: NavigationSelectors;

  constructor(page: Page) {
    this.selectors = new NavigationSelectors(page);
  }

  public async navigateTo(navigationTo: NavigateTo): Promise<void> {
    switch (navigationTo) {
      case "login":
        await this.selectors.buttonLogin.click();
        await expect(this.selectors.modalAuth).toBeVisible();
        break;
      case "registration":
        await this.selectors.buttonSignup.click();
        await expect(this.selectors.modalAuth).toBeVisible();
        break;
    }
  }
}
