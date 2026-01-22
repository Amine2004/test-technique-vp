# Test Technique VP

Automated testing project using Playwright and Cucumber/BDD.

## Installation

```bash
npm install
```

## Configuration

Configure your `playwright.config.ts` file with `importTestFrom` pointing to your fixture:

```typescript
defineBddConfig({
  features: './src/features/**/*.feature',
  steps: './src/steps/**/*.steps.ts',
  importTestFrom: './src/fixtures/fixture.ts',
})
```

### Environment Setup

This project uses environment-specific configuration files. Create the following files in the `env/` directory:

```
env/
├── .env.staging
└── .env.dev
```
## Project Structure

```
.
├── env/                       # Environment configuration files
│   ├── .env.staging
│   └── .env.development
├── src/
│   ├── features/              # .feature files (Gherkin scenarios)
│   │   └── authentification.feature
│   ├── steps/                 # BDD step definitions
│   │   └── authentification.steps.ts
│   ├── pages/                 # Page Object Models
│   │   └── loginPage.ts
│   └── fixtures/              # Custom Playwright fixtures
│       └── fixture.ts
├── playwright.config.ts       # Playwright configuration
└── README.md
```

## Dependencies

- `playwright-bdd` - BDD framework for Playwright
- `@playwright/test` - Playwright testing framework



## NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run test:staging` | Runs BDD code generation + tests with staging environment |
| `npm run test:dev` | Runs BDD code generation + tests with dev environment |

**Note:** Each script runs `bddgen` before executing tests to generate test files from feature files.

## Playwright Configuration

The project is configured with:

| Setting | Value |
|---------|-------|
| **Test Directory** | `src/features/*.feature` |
| **Step Definitions** | `src/steps/*.ts` |
| **Timeout** | 30 seconds |
| **Expect Timeout** | 5 seconds |
| **Action Timeout** | 10 seconds |
| **Browser** | Chromium (headless: false) |
| **Viewport** | 1280x720 |
| **Video** | on-first-retry |
| **Screenshot** | only-on-failure |
| **Reporter** | HTML |

## Key Files

| File | Purpose |
|------|---------|
| **playwright.config.ts** | Playwright configuration with BDD setup and environment handling |
| **fixture.ts** | Custom fixtures for dependency injection (loginPage) |
| **authentification.steps.ts** | BDD step implementations (Given, When, Then) |
| **loginPage.ts** | Page Object Model for login page interactions |
| **authentification.feature** | Test scenarios in Gherkin syntax |

## How It Works

1. **Environment Selection** - `NODE_ENV` variable determines which `.env` file to load
2. **BDD Code Generation** - `bddgen` command generates test files from `.feature` files
3. **Feature Files** - Write scenarios in `.feature` files using Gherkin syntax
4. **Step Definitions** - Implement steps in `.steps.ts` files with Page Object Model
5. **Fixtures** - Inject page objects into steps via custom fixtures

## Potential Improvements

1. **Enhance Utility Methods** - Extend existing utility methods (click, type, etc.) to make them more robust and context-aware. For example, in the click method, you could integrate AI-assisted self-healing to:
- Analyze the DOM dynamically
- Detect if the provided locator is missing
- Suggest or fallback to an alternative locator automatically

2. **Continuous Integration (CI)**
Set up a CI pipeline (GitHub Actions) to automatically run tests on push or pull requests. This ensures regression coverage and faster feedback.

3. **Device and Browser Parameters**
Add flexibility to tests by supporting different environments:
- Device types (desktop, tablet, mobile)
- Browsers (Chromium, Firefox, WebKit)
- Viewports, orientations, and resolutions