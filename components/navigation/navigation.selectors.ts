import { Locator, Page } from "@playwright/test";

export class NavigationSelectors {
  public readonly buttonLogin: Locator;
  public readonly buttonSignup: Locator;
  public readonly buttonSports: Locator;

  public readonly buttonCategoryFootball: Locator;

  public readonly modalAuth: Locator;

  constructor(page: Page) {
    this.buttonLogin = page.locator('button[data-testid="login-button"]');
    this.buttonSignup = page.locator('button[data-testid="signup-button"]');
    this.buttonSports = page.locator("a[data-testkey='sports']");

    this.buttonCategoryFootball = page.locator("a[data-testkey='1']");

    this.modalAuth = page.locator('div[data-testid="auth-modal"]');
  }
}
