import { test as base } from "@playwright/test";
import { Cookie } from "../pages/cookie/cookie";

type Fixtures = {
  cookie: Cookie;
};

export const test = base.extend<Fixtures>({
  cookie: async ({ page }, use) => {
    await use(new Cookie(page.context()));
  },
});
