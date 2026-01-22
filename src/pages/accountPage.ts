import { Page, Locator } from '@playwright/test';
import { Util } from '../Utils/Util';

export class accountPage extends Util {

    constructor(page: Page) {
        super(page);
    }
    //Locators  

    get body(): Locator {
        return this.page.locator('body');
    }
    get logoutLink(): Locator {
        return this.page.locator('#customer_logout_link');
    }


    //assertions
    async assertCustomerIsAuthenticated() {
        await this.expectToHaveAttribute(this.body, 'class', /customer-logged-in/);
    }

}