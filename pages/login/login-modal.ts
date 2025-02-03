import { LoginModalSelectors } from "./login-modal.selectors";
import { Locator, Page } from "@playwright/test";
import { Navigation } from "../navigation/navigation";
import { Amount, LoginModalTabs, LoginOptions } from "./login-modal.types";
import { LoginModalValidator } from "./login-modal.validator";

export class LoginModal {
  private readonly selectors: LoginModalSelectors;
  private readonly navigation: Navigation;
  private readonly page: Page;

  public readonly validator: LoginModalValidator;

  constructor(page: Page) {
    this.selectors = new LoginModalSelectors(page);
    this.navigation = new Navigation(page);
    this.page = page;

    this.validator = new LoginModalValidator(page);
  }

  public async open(modal: LoginModalTabs = "login"): Promise<void> {
    await this.navigation.navigateTo(modal);
  }

  public async selectTab(tab: LoginModalTabs): Promise<void> {
    const tabToClick: Record<LoginModalTabs, Locator> = {
      login: this.selectors.buttonLoginTab,
      registration: this.selectors.buttonRegisterTab,
    };

    await tabToClick[tab].click();
  }

  public async selectLoginOption(loginOptions: LoginOptions): Promise<void> {
    const optionToClick: Record<LoginOptions, Locator> = {
      email: this.selectors.buttonEmailOption,
      bank: this.selectors.buttonBankOption,
      google: this.selectors.buttonGoogleOption,
      facebook: this.selectors.buttonFacebookOption,
    };

    await optionToClick[loginOptions].click();
  }

  public async clickContinue(): Promise<void> {
    await this.selectors.buttonContinue.click();
    await this.page.waitForURL("**/checkout-cdn.zimpler.net/v4/ee/**");
  }

  public async clickContinueWithGoogle(): Promise<void> {
    await this.selectors.buttonSubmit.click();
    await this.page.waitForURL("**/accounts.google.com/**");
  }

  public async clickContinueWithFacebook(): Promise<void> {
    await this.selectors.buttonSubmit.click();
    await this.page.waitForURL("**/www.facebook.com/**");
  }

  public async selectAmount(amount: Amount): Promise<void> {
    const amountToClick: Record<Amount, Locator> = {
      "50 EUR": this.selectors.button50EUR,
      "150 EUR": this.selectors.button150EUR,
      "250 EUR": this.selectors.button250EUR,
    };

    await amountToClick[amount].click();
    await this.page.waitForURL("**/checkout-cdn.zimpler.net/v4/ee/**");
  }
}
