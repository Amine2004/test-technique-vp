# Test Technique VP

Automated testing project using Playwright and Cucumber/BDD.

## Installation

```bash
npm install
```

## Configuration

1. Configure your `playwright.config.ts` file with `importTestFrom` pointing to your fixture:

```typescript
defineBddConfig({
  features: './src/features/**/*.feature',
  steps: './src/steps/**/*.steps.ts',
  importTestFrom: './src/fixtures/fixture.ts',
})
```


## Project Structure

```
src/
├── features/          # .feature files (Gherkin)
├── steps/            # BDD step definitions
├── pages/            # Page Object Models
├── fixtures/         # Custom Playwright fixtures
└── utils/            # Utility functions
```

## Key Files

- **fixture.ts** - Defines custom fixtures (loginPage)
- **authentification.steps.ts** - Test steps for authentication
- **loginPage.ts** - Page Object Model for login page

## Dependencies

- `playwright-bdd` - BDD framework for Playwright
- `@playwright/test` - Playwright testing framework
