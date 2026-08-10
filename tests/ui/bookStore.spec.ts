import { test, expect } from "../../fixtures/testFixtures";
import { testData } from "../../test-data/testData";
import * as fs from "fs";

test.describe("DemoQA Book Store", () => {

    test("Search and validate Learning JavaScript Design Patterns", async ({
        loginPage,
        bookStorePage,
        profilePage
    }) => {

        // =========================
        // 1. Login
        // =========================

        await loginPage.navigate();

        await loginPage.login(
            testData.username,
            testData.password
        );


        // =========================
        // 2. Validate username
        // =========================

        const username = await profilePage.getUsername();

        // Case-insensitive validation
        expect(username.toLowerCase())
            .toBe(testData.username.toLowerCase());


        // =========================
        // 3. Validate Logout button
        // =========================

        await expect(profilePage.logoutButton)
            .toBeVisible();


        // =========================
        // 4. Click Book Store
        // =========================

        await bookStorePage.clickBookStore();


        // =========================
        // 5. Search book
        // =========================

        await bookStorePage.searchBook(
            "Learning JavaScript Design Patterns"
        );


        // =========================
        // 6. Validate search result
        // =========================

        const bookTitle = await bookStorePage.getBookTitle();

        expect(bookTitle)
            .toContain("Learning JavaScript Design Patterns");


        // =========================
        // 7. Get book details
        // =========================

        const author = await bookStorePage.getBookAuthor();

        const publisher = await bookStorePage.getBookPublisher();


        // =========================
        // 8. Print details
        // =========================

        console.log("=================================");
        console.log("Book Title  :", bookTitle);
        console.log("Author      :", author);
        console.log("Publisher   :", publisher);
        console.log("=================================");


        // =========================
        // 9. Save details into file
        // =========================

        const output = `
Book Title : ${bookTitle}
Author     : ${author}
Publisher  : ${publisher}
`;

        fs.writeFileSync(
            "output/book-details.txt",
            output
        );


        // =========================
        // 10. Logout
        // =========================

        await profilePage.logout();
    });

});