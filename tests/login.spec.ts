import { test } from "../config/test-fixtures";

test.describe("LOGIN", () => {
  test.beforeEach(async ({ cookie }) => {
    await cookie.declineCookies();
  });

  test("Email and password login form is visible", async ({ loginModal }) => {
    await loginModal.open();
    await loginModal.selectTab("login");
    await loginModal.selectLoginOption("email");

    await loginModal.validator.validateEmailAndPasswordLoginFormIsVisible();
  });

  test("Bank login form is visible", async ({ loginModal }) => {
    await loginModal.open();
    await loginModal.selectTab("login");
    await loginModal.selectLoginOption("bank");

    await loginModal.validator.validateBankLoginFormIsVisible();
  });

  test("Google login form is visible", async ({ loginModal }) => {
    await loginModal.open();
    await loginModal.selectTab("login");
    await loginModal.selectLoginOption("google");

    await loginModal.validator.validateGoogleLoginFormIsVisible(
      "Jätka Googlega",
    );
  });

  test("Facebook login form is visible", async ({ loginModal }) => {
    await loginModal.open();
    await loginModal.selectTab("login");
    await loginModal.selectLoginOption("facebook");

    await loginModal.validator.validateFacebookLoginFormIsVisible(
      "Jätka Facebookiga",
    );
  });
});
