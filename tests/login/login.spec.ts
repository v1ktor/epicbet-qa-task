import { test } from "../../config/test-fixtures";
import { Tag } from "../../config/tag";

test.describe("LOGIN", () => {
  test.beforeEach(async ({ cookie, loginModal }) => {
    await cookie.declineCookies();

    await loginModal.open();
    await loginModal.selectTab("login");
  });

  test(
    "Email and password login form is visible",
    { tag: [Tag.Ui, Tag.Login, Tag.UnauthorizedUser] },
    async ({ loginModal }) => {
      await loginModal.selectLoginOption("email");
      await loginModal.validator.validateEmailAndPasswordLoginFormIsVisible();
    },
  );

  test(
    "Bank login form is visible",
    { tag: [Tag.Ui, Tag.Login, Tag.UnauthorizedUser] },
    async ({ loginModal }) => {
      await loginModal.selectLoginOption("bank");
      await loginModal.validator.validateBankLoginFormIsVisible();

      await loginModal.clickContinue();
      await loginModal.validator.validateBankChoicePageIsInvoked();
    },
  );

  test(
    "Google login form is visible",
    { tag: [Tag.Ui, Tag.Login, Tag.UnauthorizedUser] },
    async ({ loginModal }) => {
      await loginModal.selectLoginOption("google");
      await loginModal.validator.validateGoogleLoginFormIsVisible({
        translatedString: "Jätka Googlega",
      });

      await loginModal.clickContinueWithGoogle();
      await loginModal.validator.validateSignInWithGooglePageIsInvoked();
    },
  );

  test(
    "Facebook login form is visible",
    { tag: [Tag.Ui, Tag.Login, Tag.UnauthorizedUser] },
    async ({ loginModal }) => {
      await loginModal.selectLoginOption("facebook");
      await loginModal.validator.validateFacebookLoginFormIsVisible({
        translatedString: "Jätka Facebookiga",
      });

      await loginModal.clickContinueWithFacebook();
      await loginModal.validator.validateSignInWithFacebookPageIsInvoked();
    },
  );
});
