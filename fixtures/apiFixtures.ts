import "dotenv/config";
import { test as base, expect, request as playwrightRequest } from "@playwright/test";

export const test = base.extend({
    request: async ({}, use) => {

        const apiKey = process.env.REQRES_API_KEY;

        console.log("BASE URL:", process.env.API_BASE_URL);
        console.log("API KEY:", apiKey);

        if (!apiKey) {
            throw new Error("REQRES_API_KEY is missing from .env");
        }

        const apiContext = await playwrightRequest.newContext({
            baseURL: process.env.API_BASE_URL,

            extraHTTPHeaders: {
                "Content-Type": "application/json",
                "x-api-key": apiKey
            }
        });

        await use(apiContext);
        await apiContext.dispose();
    }
});

export { expect };