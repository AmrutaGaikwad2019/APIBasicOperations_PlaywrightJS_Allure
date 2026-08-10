import { test, expect } from "@playwright/test"
var userid;

test.describe("API Flow", () => {

    test("Post Operation", async ({ request }) => {
        const response = await request.post("https://reqres.in/api/register", {
            headers: { "x-api-key": "free_user_3HiO4o1DOQQ0RWSn42RFjX7JlrV" },
            data: {
                email: "eve.holt@reqres.in", password: "pistol"
            }
        });
        console.log(await response.json());
        expect(response.status()).toBe(200);
        const body = response.json();
        userid = body.id;
        console.log("Created User ID:", userid);
    });

    test("Get Operation", async ({ request }) => {
        let id=userid | 4;
        const response = await request.get(`https://reqres.in/api/users/${id}`, {
            headers: { "x-api-key": "free_user_3HiO4o1DOQQ0RWSn42RFjX7JlrV" }
        });
        console.log(await response.json());
        expect(response.status()).toBe(200)
    });

    test("Put Operation", async ({ request }) => {
        const response = await request.put(`https://reqres.in/api/users/${userid}`, {
            data: { email: "eve.holt@reqres.in", password: "Gun" },
            headers: { "x-api-key": "free_user_3HiO4o1DOQQ0RWSn42RFjX7JlrV" }
        });
        console.log(await response.json());
        expect(response.status()).toBe(200);
    });

    test("Delete Operation", async ({ request }) => {
        const response = await request.delete(`https://reqres.in/api/users/${userid}`, {
            headers: { "x-api-key": "free_user_3HiO4o1DOQQ0RWSn42RFjX7JlrV" }
        });

        expect(response.status()).toBe(204);
    });



}) 



//npx playwright test tests/APIBasicOperations.spec.js --retries=4

//npm install --save-dev @playwright/test allure-playwright
//npm install -D allure-playwright
//npm install -g allure-commandline --save-dev
//allure --version
//allure generate ./allure-results -o ./allure-report --clean
//allure open ./allure-report

/*
export default defineConfig({
  reporter: [["line"], ["allure-playwright"]],
});
*/