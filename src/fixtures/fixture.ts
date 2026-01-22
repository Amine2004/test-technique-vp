import { test as base } from 'playwright-bdd';
import { loginPage } from '../pages/loginPage';

export type TestFixtures = {
  loginPage: loginPage;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const login = new loginPage(page);
    await use(login);
  },
});