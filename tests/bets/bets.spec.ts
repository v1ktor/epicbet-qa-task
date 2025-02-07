import { test } from "../../config/test-fixtures";
import { PlaceBetOptions } from "../../components/bets/bets.types";
import { Tag } from "../../config/tag";

test.describe("BETS", () => {
  test.beforeEach(async ({ cookie }) => {
    await cookie.declineCookies();
  });

  test(
    "Unauthorized user will be redirected to login screen, when bet is placed",
    { tag: [Tag.Ui, Tag.UnauthorizedUser, Tag.Bets] },
    async ({ bets, loginModal }) => {
      const placeBetOptions: PlaceBetOptions = {
        indexOfOutcomeButton: 0,
        amount: 100,
      };

      await bets.navigateToCategory("category-football");
      await bets.placeBet(placeBetOptions);
      await loginModal.validator.validateBankLoginFormIsVisible();

      await loginModal.close();
      await bets.validator.validateBetsPlacedModalIsVisible();

      await bets.openPlaceBetSidebar();
      await bets.clickPlaceBetButton();
      await loginModal.validator.validateBankLoginFormIsVisible();
    },
  );
});
