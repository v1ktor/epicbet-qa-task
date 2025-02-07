import { test as base } from "@playwright/test";
import { Cookie } from "../components/cookie/cookie";
import { Navigation } from "../components/navigation/navigation";
import { LoginModal } from "../components/login/login-modal";
import { Bets } from "../components/bets/bets";
import { Search } from "../components/search/search";

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
