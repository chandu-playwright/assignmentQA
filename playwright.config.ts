import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({

    testDir: "./tests",

    fullyParallel: true,

    reporter: [
        ["html"],
        ["list"]
    ],

    use: {
        baseURL: process.env.BASE_URL,

        headless: false,

        screenshot: "only-on-failure",

        video: "retain-on-failure",

        trace: "retain-on-failure"
    },

    projects: [
        {
            name: "chromium",
            use: {
                ...devices["Desktop Chrome"]
            }
        }
    ]
});