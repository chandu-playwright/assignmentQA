import { test as base } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { BookStorePage } from "../pages/BookStorePage";
import { ProfilePage } from "../pages/ProfilePage";

type Fixtures = {
    loginPage: LoginPage;
    bookStorePage: BookStorePage;
    profilePage: ProfilePage;
};

export const test = base.extend<Fixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    bookStorePage: async ({ page }, use) => {
        const bookStorePage = new BookStorePage(page);
        await use(bookStorePage);
    },

    profilePage: async ({ page }, use) => {
        const profilePage = new ProfilePage(page);
        await use(profilePage);
    }
});

export { expect } from "@playwright/test";
