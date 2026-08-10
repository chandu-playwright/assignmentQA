import { Page, Locator } from "@playwright/test";

export class ProfilePage {

    readonly page: Page;
    readonly username: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.locator("#userName-value");

        this.logoutButton = page.getByRole("button", {
            name: /log\s*out/i
        });
    }

    async getUsername(): Promise<string> {
        return await this.username.innerText();
    }

    async logout(): Promise<void> {
        await this.logoutButton.click();
    }
}