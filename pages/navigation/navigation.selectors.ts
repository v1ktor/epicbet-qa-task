import { Locator, Page } from "@playwright/test";

export class NavigationSelectors {
  public readonly buttonLogin: Locator;
  public readonly buttonSignup: Locator;

  public readonly modalAuth: Locator;

  constructor(page: Page) {
    this.buttonLogin = page.locator('button[data-testid="login-button"]');
    this.buttonSignup = page.locator('button[data-testid="signup-button"]');

    this.modalAuth = page.locator('div[data-testid="auth-modal"]');
  }
}
