import { Locator, Page } from "@playwright/test";
import { Amount } from "./login-modal.types";

export class LoginModalSelectors {
  private readonly page: Page;

  public readonly buttonLoginTab: Locator;
  public readonly buttonRegisterTab: Locator;
  public readonly buttonEmailOption: Locator;
  public readonly buttonBankOption: Locator;
  public readonly buttonGoogleOption: Locator;
  public readonly buttonFacebookOption: Locator;
  public readonly buttonLogin: Locator;
  public readonly buttonContinue: Locator;
  public readonly buttonSubmit: Locator;
  public readonly buttonBanks: Locator;
  public readonly button50EUR: Locator;
  public readonly button150EUR: Locator;
  public readonly button250EUR: Locator;

  public readonly inputEmail: Locator;
  public readonly inputPassword: Locator;
  public readonly inputSelectCountry: Locator;
  public readonly inputAmount: Locator;

  constructor(page: Page) {
    this.page = page;

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
    this.button50EUR = page
      .locator("div#modal button > div")
      .getByText("50 €", { exact: true });
    this.button150EUR = page
      .locator("div#modal button > div")
      .getByText("150 €", { exact: true });
    this.button250EUR = page
      .locator("div#modal button > div")
      .getByText("250 €", { exact: true });

    this.inputEmail = page.locator("input[data-testid='email-input']");
    this.inputPassword = page.locator("input[data-testid='password-input']");
    this.inputSelectCountry = page.locator('div[data-testkey="EE"]');
    this.inputAmount = page.locator("div#modal input:nth-of-type(1)");
  }

  public textAmount(amount: Amount | string): Locator {
    return this.page
      .locator("h3")
      .getByText(`Pangamakse ${amount}`, { exact: true });
  }
}
