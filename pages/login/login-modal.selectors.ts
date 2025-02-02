import { Locator, Page } from "@playwright/test";

export class LoginModalSelectors {
  readonly buttonLoginTab: Locator;
  readonly buttonRegisterTab: Locator;
  readonly buttonEmailOption: Locator;
  readonly buttonBankOption: Locator;
  readonly buttonGoogleOption: Locator;
  readonly buttonFacebookOption: Locator;
  readonly buttonLogin: Locator;
  readonly buttonContinue: Locator;
  readonly buttonSubmit: Locator;
  readonly buttonBanks: Locator;

  readonly inputEmail: Locator;
  readonly inputPassword: Locator;
  readonly inputSelectCountry: Locator;

  constructor(page: Page) {
    this.buttonLoginTab = page.locator(
      "button[data-testid='login-tab-button']",
    );
    this.buttonRegisterTab = page.locator(
      "button[data-testid='register-tab-button']",
    );
    this.buttonEmailOption = page.locator(
      "button[data-testid='email-option-button']",
    );
    this.buttonBankOption = page.locator(
      "button[data-testid='pnp-option-button']",
    );
    this.buttonGoogleOption = page.locator(
      "button[data-testid='email-option-button']~button:nth-of-type(3)",
    );
    this.buttonFacebookOption = page.locator(
      "button[data-testid='email-option-button']~button:nth-of-type(4)",
    );
    this.buttonLogin = page.locator("button[data-testid='auth-login-button']");
    this.buttonContinue = page.locator("button[data-testid='continue-button']");
    this.buttonSubmit = page.locator("button[type='submit']");
    this.buttonBanks = page.locator(
      'section[data-test="ChooseBankList"] button',
    );

    this.inputEmail = page.locator("input[data-testid='email-input']");
    this.inputPassword = page.locator("input[data-testid='password-input']");
    this.inputSelectCountry = page.locator('div[data-testkey="EE"]');
  }
}
