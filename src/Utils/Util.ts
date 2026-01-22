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
    async expectToHaveText(locator: Locator, message: string) {
        await expect(locator).toBeVisible();
        await expect(locator).toHaveText(message);
    }
}