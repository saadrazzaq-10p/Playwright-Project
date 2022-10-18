const { test, verify } = require("../fixtures/base");

const data = require("../data/test-data.json");

test.describe("e2e Test", () => {
    test.beforeEach(async ({ page, loginPage }, testInfo) => {
        await loginPage.navigatetoLogin()
    })

    test('Login with valid username and password', async ({ page, loginPage }) => {
        await loginPage.loginUser(data.username, data.password)
        await verify(page).toHaveTitle("Inspire")
    })

    test('Login with invalid username and valid password', async ({ page, loginPage }) => {
        await loginPage.loginUser("testuser@abc.xyz", data.password)
        const ErrorMsg = page.locator('[id="login_error"]')
        await verify(ErrorMsg).toContainText('Incorrect e-mail address or password. Please try again.')
    })

    test('Login with valid username and invalid password', async ({ page, loginPage }) => {
        await loginPage.loginUser(data.username, "wrongpassword")
        const ErrorMsg = page.locator('[id="login_error"]')
        await verify(ErrorMsg).toContainText('Incorrect e-mail address or password. Please try again.')
    })
})