import { test as base } from "@playwright/test";
import { Cookie } from "../pages/cookie/cookie";
import { Navigation } from "../pages/navigation/navigation";
import { LoginModal } from "../pages/login/login-modal";
import { Bets } from "../pages/bets/bets";
import { Search } from "../pages/search/search";

type Fixtures = {
  cookie: Cookie;
  navigation: Navigation;
  loginModal: LoginModal;
  bets: Bets;
  search: Search;
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
  bets: async ({ page }, use) => {
    await use(new Bets(page));
  },
  search: async ({ page }, use) => {
    await use(new Search(page));
  },
});
