import { test, expect } from "../../fixtures/apiFixtures";

test.describe("ReqRes User API", () => {

    test("Create user", async ({ request }) => {

        const response = await request.post("/api/users", {
            data: {
                name: "Naveen",
                job: "QA Automation Engineer"
            }
        });

        console.log("STATUS:", response.status());
        console.log("BODY:", await response.text());

        expect(response.status()).toBe(201);
    });

});