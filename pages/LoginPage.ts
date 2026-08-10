import { Page, Locator } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly newUserButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.usernameInput = page.locator("#userName");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#login");
        this.newUserButton = page.locator("#newUser");
    }

    async navigate() {
        await this.page.goto("https://demoqa.com/login");
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}