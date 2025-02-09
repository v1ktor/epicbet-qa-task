import { BrowserContext, Page } from "@playwright/test";

export class Cookie {
  private readonly browserContext: BrowserContext;
  private readonly page: Page;

  constructor(page: Page, browserContext: BrowserContext) {
    this.browserContext = browserContext;
    this.page = page;
  }

  public async declineCookies(): Promise<void> {
    await this.browserContext.addCookies([
      {
        name: "CookieConsent",
        value:
          "{stamp:%27PuSKzMgziAFdTLa5FzFSr4vbvlQnA4IdhLZfeZ+9fBM/j32CWy3XGA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1738313789122%2Cregion:%27ee%27}",
        domain: "epicbet.com",
        path: "/",
      },
    ]);

    await this.page.goto("/et");
  }
}
