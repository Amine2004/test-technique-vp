import { Locator, Page, expect } from "@playwright/test";

export class Util {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async type(locator: Locator, value: string) {
        await locator.fill(value);
    }
    async navigateTo(url: string) {
        console.log(`Navigating to URL: ${url}`);
        await this.page.goto(url);
        await this.page.waitForLoadState("domcontentloaded");
    }

    //assertions
    async expectToHaveText(locator: Locator, message: string) {
        await expect(locator).toBeVisible();
        await expect(locator).toHaveText(message);
    }

    async expectToHaveAttribute(
        locator: Locator,
        attribute: string,
        expected: string | RegExp,
        options?: { timeout?: number }
        ) {
        await expect(
            locator,
            `Expected element to have attribute "${attribute}" with value "${expected}"`
        ).toHaveAttribute(attribute, expected, options);
    }
}