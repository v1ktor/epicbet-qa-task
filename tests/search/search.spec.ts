import { test } from "../../config/test-fixtures";
import { Tag } from "../../config/tag";

test.describe("SEARCH", () => {
  test.beforeEach(async ({ cookie }) => {
    await cookie.declineCookies();
  });

  test(
    "User can search for casino",
    { tag: [Tag.Ui, Tag.UnauthorizedUser, Tag.Search] },
    async ({ search }) => {
      await search.openSearchModal();
      await search.switchTo("casino");
      await search.searchFor('"Evolution"');

      await search.validator.validateCasinoSearchResults({
        expectedNumberOfResults: 360,
      });
    },
  );

  test(
    "User can search for sports",
    { tag: [Tag.Ui, Tag.UnauthorizedUser, Tag.Search] },
    async ({ search }) => {
      await search.openSearchModal();
      await search.searchFor("Liverpool");

      await search.validator.validateSportsSearchResults();
    },
  );
});
