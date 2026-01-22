import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';

const { Given, When, Then } = createBdd(test);

Given('I am on the  login page', async ({ loginPage }) => {
    await loginPage.navigateToLoginPage( process.env.baseUrl);

});
When('I enter invalid  credentials', async ({ loginPage }, dataTable: any) => {
    const [{ email = '', password = '' }] = dataTable.hashes();
    await loginPage.fillEmail(email);
    await loginPage.fillPassword(password);
});
When('I enter valid  credentials', async ({ loginPage }, dataTable: any) => {
    const [{ email = '', password = '' }] = dataTable.hashes();
    await loginPage.fillEmail(email);
    await loginPage.fillPassword(password);
});
When('I submit the login form', async ({ loginPage }) => {
    await loginPage.clickLoginButton();
});
Then('I should be redirected to the dashboard', async ({ loginPage }) => {
    // i don't have a valid user to test this step properly
});
Then('I should see an error message {string}', async ({loginPage}, message: string) => {
    await loginPage.expectInvalidCredentialsError(message);
});
