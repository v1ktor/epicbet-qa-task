import { LoginModalSelectors } from "./login-modal.selectors";
import { expect, Page } from "@playwright/test";

export class LoginModalValidator {
  private readonly selectors: LoginModalSelectors;

  constructor(page: Page) {
    this.selectors = new LoginModalSelectors(page);
  }

  public async validateEmailAndPasswordLoginFormIsVisible(): Promise<void> {
    await expect(this.selectors.inputPassword).toBeVisible();
    await expect(this.selectors.inputEmail).toBeVisible();
    await expect(this.selectors.buttonLogin).toBeVisible();
  }

  public async validateBankLoginFormIsVisible() {
    await expect(this.selectors.inputSelectCountry).toBeVisible();
    await expect(this.selectors.buttonContinue).toBeVisible();
  }

  public async validateGoogleLoginFormIsVisible(translatedText: string) {
    await expect(this.selectors.buttonSubmit).toHaveText(translatedText);
  }

  public async validateFacebookLoginFormIsVisible(translatedText: string) {
    await expect(this.selectors.buttonSubmit).toHaveText(translatedText);
  }
}
