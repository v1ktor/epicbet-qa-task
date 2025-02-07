import { test } from "../../config/test-fixtures";

test.describe("SEARCH", () => {
  test.beforeEach(async ({ cookie }) => {
    await cookie.declineCookies();
  });

  test("User can search for casino", async ({ search }) => {
    await search.openSearchModal();
    await search.switchTo("casino");
    await search.searchFor('"Evolution"');

    await search.validator.validateCasinoSearchResults({
      expectedNumberOfResults: 360,
    });
  });

  test("User can search for sports", async ({ search }) => {
    await search.openSearchModal();
    await search.searchFor("Liverpool");

    await search.validator.validateSportsSearchResults();
  });
});
