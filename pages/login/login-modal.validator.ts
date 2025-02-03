import { LoginModalSelectors } from "./login-modal.selectors";
import { expect, Page } from "@playwright/test";
import { Amount } from "./login-modal.types";

export class LoginModalValidator {
  private readonly selectors: LoginModalSelectors;
  private readonly page: Page;

  constructor(page: Page) {
    this.selectors = new LoginModalSelectors(page);
    this.page = page;
  }

  public async validateEmailAndPasswordLoginFormIsVisible(): Promise<void> {
    await expect(this.selectors.inputPassword).toBeVisible();
    await expect(this.selectors.inputEmail).toBeVisible();
    await expect(this.selectors.buttonLogin).toBeVisible();
  }

  public async validateBankLoginFormIsVisible(): Promise<void> {
    await expect(this.selectors.inputSelectCountry).toBeVisible();
    await expect(this.selectors.buttonContinue).toBeVisible();
  }

  public async validateGoogleLoginFormIsVisible(
    buttonTranslation: string,
  ): Promise<void> {
    await expect(this.selectors.buttonSubmit).toHaveText(buttonTranslation);
  }

  public async validateFacebookLoginFormIsVisible(
    buttonTranslation: string,
  ): Promise<void> {
    await expect(this.selectors.buttonSubmit).toHaveText(buttonTranslation);
  }

  public async validateBankChoicePageIsInvoked(): Promise<void> {
    expect(this.page.url()).toContain("https://checkout-cdn.zimpler.net/");
    await expect(this.selectors.buttonBanks).toHaveCount(4);
  }

  public async validateSignInWithGooglePageIsInvoked(): Promise<void> {
    expect(this.page.url()).toContain("https://accounts.google.com/");
    await expect(
      this.page.locator("div").getByText("Sign in with Google"),
    ).toBeVisible();
  }

  public async validateSignInWithFacebookPageIsInvoked(): Promise<void> {
    expect(this.page.url()).toContain("https://www.facebook.com/");
    await expect(
      this.page.locator("div").getByText("Log Into Facebook"),
    ).toBeVisible();
  }

  public async validateRegistrationFormIsVisible(): Promise<void> {
    await expect(this.selectors.inputSelectCountry).toBeVisible();
    await expect(this.selectors.inputAmount).toBeVisible();
  }

  public async validateCorrectAmountIsSelected(
    amount: Amount | string,
  ): Promise<void> {
    await expect(this.selectors.textAmount(amount)).toBeVisible();
  }
}
