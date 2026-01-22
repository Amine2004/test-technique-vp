import { test as base } from 'playwright-bdd';
import { loginPage } from '../pages/loginPage';
import { accountPage } from '../pages/accountPage';

export type TestFixtures = {
  loginPage: loginPage;
  accountPage: accountPage;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const login = new loginPage(page);
    await use(login);
  },
  accountPage: async ({ page }, use) => {
    const account = new accountPage(page);
    await use(account);
  }
});