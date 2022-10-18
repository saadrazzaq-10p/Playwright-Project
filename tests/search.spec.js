const { test, verify } = require("../fixtures/base");

test.describe("e2e Test", () => {
    test.beforeEach(async ({ page, SearchPage }, testInfo) => {
        await SearchPage.navigatetoSearch()
    })

    test('Verify My Communities Widget', async ({ page, SearchPage }) => {
        await SearchPage.verifySearchField()
    })

    test('Verify My Friends Widget', async ({ page, SearchPage }) => {
        await SearchPage.verifySearchButton()
    })

    test.only('Verify My Uploads Widget', async ({ page, SearchPage }) => {
        await SearchPage.verifySearchFunctionality('heart')
        await SearchPage.SearchResultCount.waitFor({ state: 'visible' })
        return await SearchPage.SearchResultCount.isVisible()
    })

})