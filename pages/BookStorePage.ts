import { Page, Locator } from "@playwright/test";

export class BookStorePage {

    readonly page: Page;
    readonly bookStoreButton: Locator;
    readonly searchBox: Locator;
    readonly bookRows: Locator;

    constructor(page: Page) {

        this.page = page;

        this.bookStoreButton = page.getByRole("link", {
            name: "Book Store",
            exact: true
        });

        this.searchBox = page.getByRole("textbox", {
            name: "Type to search"
        });

        // Actual data rows
        this.bookRows = page.locator("table tbody tr");
    }

    async clickBookStore(): Promise<void> {
        await this.bookStoreButton.click();
    }

    async searchBook(bookName: string): Promise<void> {
        await this.searchBox.fill(bookName);
    }

    async getBookDetails(bookName: string) {

        const row = this.bookRows.filter({
            hasText: bookName
        });

        await row.waitFor();

        const cells = row.locator("td");

        const title = await cells.nth(1).innerText();
        const author = await cells.nth(2).innerText();
        const publisher = await cells.nth(3).innerText();

        return {
            title,
            author,
            publisher
        };
    }

    async getBookTitle(): Promise<string> {

        const row = this.bookRows.filter({
            hasText: "Learning JavaScript Design Patterns"
        });

        return await row.locator("td").nth(1).innerText();
    }

    async getBookAuthor(): Promise<string> {

        const row = this.bookRows.filter({
            hasText: "Learning JavaScript Design Patterns"
        });

        return await row.locator("td").nth(2).innerText();
    }

    async getBookPublisher(): Promise<string> {

        const row = this.bookRows.filter({
            hasText: "Learning JavaScript Design Patterns"
        });

        return await row.locator("td").nth(3).innerText();
    }
}