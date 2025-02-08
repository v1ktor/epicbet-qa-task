# epicbet-qa-task

## Technical Stack

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## How to run the tests and other scripts

- `npm run test` - runs all the tests
- `npm run test:report` - opens the test report for the last run
- `npm run eslint:check` - runs eslint and checks the TypeScript issues
- `npm run eslint:fix`- runs eslint and fixes the TypeScript issues
- `npm run prettier:check` - runs prettier and checks the formatting issues
- `npm run prettier:fix` - runs prettier and fixes the formatting issues

## Project Structure

```
.
├── .github/
│   └── workflows
├── components/
│   ├── bets
│   ├── cookie
│   ├── login
│   ├── navigation
│   └── search
├── config
└── tests/
    ├── bets
    ├── login
    ├── registration
    └── search
```

- `.github/workflows` - contains the GitHub Actions workflows for running test on push and pull request events
- `components` - POM classes that represent the behaviour of the application. Each component contains the selectors,
  types, validator and main component class
- `config` - test fixtures and tags
- `tests` - test suites for the application. Each test suite contains the test cases for the specific component