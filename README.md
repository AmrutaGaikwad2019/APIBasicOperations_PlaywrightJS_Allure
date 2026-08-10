# 📘 Playwright API Flow Tests

This project demonstrates how to perform **basic API operations (POST, GET, PUT, DELETE)** using [Playwright](ca://s?q=Playwright_API_testing).  
The tests interact with the public demo API [ReqRes](ca://s?q=ReqRes_API) and show how to chain requests together.

---

## 🚀 Prerequisites

- Install [Node.js](ca://s?q=Install_Node.js_on_Windows) (v16+ recommended).
- Install Playwright:
  ```bash
  npm install @playwright/test
  npm install -g allure-commandline --save-dev

📂 Project Structure


  tests/
  
 └── APIBasicOperations.spec.js   # Contains Post, Get, Put, Delete tests

▶️ Running Tests

Run test file: npx playwright test tests/APIBasicOperations.spec.js

Generate Allure report:

allure generate ./allure-results -o ./allure-report --clean
allure open ./allure-report

🧩 Test Flow
The suite is grouped under test.describe("API Flow") and includes:

Post Operation  
Registers a user with email and password.
Expects 200 OK.
Extracts id from the response.

Get Operation  
Fetches user details using the id (or fallback 4).
Expects 200 OK.

Put Operation  
Updates the user’s details (changes password).
Expects 200 OK.

Delete Operation  
Deletes the user by id.
Expects 204 No Content.

⚠️ Notes
reqres.in/api/register returns a token, not a real user ID.
For CRUD operations, prefer using /api/users.

Always await response.json() before accessing fields like id.

If you see 404 Not Found in GET, it means the user ID doesn’t exist in ReqRes’s mock database.

