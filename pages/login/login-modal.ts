import { LoginModalSelectors } from "./login-modal.selectors";
import { Locator, Page } from "@playwright/test";
import { Navigation } from "../navigation/navigation";
import { LoginModalTabs, LoginOptions } from "./login-modal.types";
import { LoginModalValidator } from "./login-modal.validator";

export class LoginModal {
  private readonly selectors: LoginModalSelectors;
  private readonly navigation: Navigation;

  public readonly validator: LoginModalValidator;

  constructor(page: Page) {
    this.selectors = new LoginModalSelectors(page);
    this.navigation = new Navigation(page);

    this.validator = new LoginModalValidator(page);
  }

  public async open(): Promise<void> {
    await this.navigation.navigateTo("login");
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
}
