import "dotenv/config";
import {
    APIRequestContext,
    test as base,
    expect,
    request as playwrightRequest
} from "@playwright/test";
import { UserApi } from "../api/UserApi";

type ApiFixtures = {
    request: APIRequestContext;
    userApi: UserApi;
};

export const test = base.extend<ApiFixtures>({
    request: async ({}, use) => {

        const apiKey = process.env.REQRES_API_KEY;

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
    },

    userApi: async ({ request }, use) => {
        await use(new UserApi(request));
    }
});

export { expect };