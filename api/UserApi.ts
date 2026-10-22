import { APIRequestContext } from "@playwright/test";

export class UserApi {

    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async createUser(name: string, job: string) {

        const response = await this.request.post("/api/users", {
            data: {
                name,
                job
            }
        });

        return response;
    }

    async getUser(userId: string) {

        const response = await this.request.get(
            `/api/users/${userId}`
        );

        return response;
    }

    async updateUser(
        userId: string,
        name: string,
        job: string
    ) {

        const response = await this.request.put(
            `/api/users/${userId}`,
            {
                data: {
                    name,
                    job
                }
            }
        );

        return response;
    }

    async deleteUser(userId: string) {
        return await this.request.delete(`/api/users/${userId}`);
    }
}