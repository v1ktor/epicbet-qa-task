import { test as base } from "@playwright/test";
import { Cookie } from "../pages/cookie/cookie";
import { Navigation } from "../pages/navigation/navigation";
import { LoginModal } from "../pages/login/login-modal";

type Fixtures = {
  cookie: Cookie;
  navigation: Navigation;
  loginModal: LoginModal;
};

export const test = base.extend<Fixtures>({
  cookie: async ({ page }, use) => {
    await use(new Cookie(page, page.context()));
  },
  navigation: async ({ page }, use) => {
    await use(new Navigation(page));
  },
  loginModal: async ({ page }, use) => {
    await use(new LoginModal(page));
  },
});
