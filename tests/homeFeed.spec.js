const { test, verify } = require("../fixtures/base");

test.describe("e2e Test", () => {
    test.beforeEach(async ({ page, loginPage }, testInfo) => {
        await loginPage.navigatetoLogin()
        await loginPage.loginUser(data.username, data.password)
    })

    test('Verify My Communities Widget', async ({ page, HomeFeedPage }) => {
        await HomeFeedPage.verifyMyCommunitiedWidget()
    })

    test('Verify My Friends Widget', async ({ page, HomeFeedPage }) => {
        await HomeFeedPage.verifyMyFriendsWidget()
    })

    test('Verify My Uploads Widget', async ({ page, HomeFeedPage }) => {
        await HomeFeedPage.verifyMyUploadsWidget()
    })
    
})