import { test, expect } from "../../fixtures/testFixtures";

test.describe("DemoQA Login", () => {

    test("Rejects invalid credentials", async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login("invalid-user", "invalid-password");

        await expect(loginPage.page.getByText("Invalid username or password"))
            .toBeVisible();
    });
});