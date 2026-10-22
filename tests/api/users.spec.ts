import { test, expect } from "../../fixtures/apiFixtures";

test.describe("ReqRes User API", () => {

    test("Create and delete user", async ({ userApi }) => {

        const createResponse = await userApi.createUser(
            "Naveen",
            "QA Automation Engineer"
        );

        expect(createResponse.status()).toBe(201);

        const { id } = await createResponse.json();
        const deleteResponse = await userApi.deleteUser(id);

        expect(deleteResponse.status()).toBe(204);
    });

});