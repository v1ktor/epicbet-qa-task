import { test } from "../../config/test-fixtures";
import { Amount } from "../../pages/login/login-modal.types";
import { Tag } from "../../config/tag";

test.describe("REGISTRATION", () => {
  const amountButtons: Amount[] = ["50 EUR", "150 EUR", "250 EUR"];

  test.beforeEach(async ({ cookie }) => {
    await cookie.declineCookies();
  });

  test(
    "Registration form is visible",
    { tag: [Tag.Ui, Tag.UnauthorizedUser, Tag.Registration] },
    async ({ loginModal }) => {
      await loginModal.open("registration");
      await loginModal.validator.validateRegistrationFormIsVisible();

      await loginModal.clickContinue();
      await loginModal.validator.validateBankChoicePageIsInvoked();
      await loginModal.validator.validateCorrectAmountIsSelected("100 EUR");
    },
  );

  amountButtons.forEach((amount) => {
    test(
      `Correct ${amount} amount is displayed on the bank choice page`,
      { tag: [Tag.Ui, Tag.UnauthorizedUser, Tag.Registration] },
      async ({ loginModal }) => {
        await loginModal.open("registration");
        await loginModal.selectAmount(amount);

        await loginModal.validator.validateBankChoicePageIsInvoked();
        await loginModal.validator.validateCorrectAmountIsSelected(amount);
      },
    );
  });
});
