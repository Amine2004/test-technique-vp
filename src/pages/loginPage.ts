import { Locator, Page } from '@playwright/test';
import { Util } from '../Utils/Util';

export class loginPage extends Util {

    constructor(page: Page) {
        super(page);
    }
    //Locators  

    get emailInput() {
        return this.page.locator('#customer_email');
    }
    get passwordInput() {
        return this.page.locator('#customer_password');
    }
    get loginButton() {
        return this.page.getByRole('button', { name: 'Sign In' });
    }
    get errorMessage() {
        return this.page.locator('div.errors li');
    }

    //actions
    async navigateToLoginPage(url: string) {
        await this.navigateTo(url);
    }

    async fillEmail(email: string) {
        await this.type(this.emailInput, email);
    }

    async fillPassword(password: string) {
        await this.type(this.passwordInput, password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    //assertions
    async expectInvalidCredentialsError(message: string) {
        await this.expectToHaveText(this.errorMessage, message);
    }
}

