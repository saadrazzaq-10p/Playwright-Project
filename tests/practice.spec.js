const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../Models/login-page");
const { InventoryPage } = require("../Models/inventory-page");
const { CheckoutPage } = require("../Models/checkout-page");
const { UserdetailsPage } = require("../Models/userdetails-page");
const { CheckoutOverviewPage } = require("../Models/checkoutoverview-page");

const data = require("../data/test-data.json");

let loginPage
let inventoryPage
let checkoutPage
let userdetailsPage
let checkoutoverviewPage

test.describe("e2e Test", () => {
    test.beforeEach(async ({ page }, testInfo) => {
        loginPage = new LoginPage(page)
        inventoryPage = new InventoryPage(page)
        checkoutPage = new CheckoutPage(page)
        userdetailsPage = new UserdetailsPage(page)
        checkoutoverviewPage = new CheckoutOverviewPage(page)
        await loginPage.navigate()
    })

    test('Checkout back Pack Test', async ({ page }) => {
        await loginPage.enterUsername(data.username)
        await loginPage.enterPassword(data.password)
        await loginPage.loginBtnClick()
        await expect(page).toHaveURL(/.*inventory.html/)

        await inventoryPage.addbackPack()
        await inventoryPage.addToCart()
        await expect(page).toHaveURL(/.*cart.html/)

        await checkoutPage.checkoutClick()
        await expect(page).toHaveURL(/.*checkout-step-one.html/)

        await userdetailsPage.enterFirstName()
        await userdetailsPage.enterLastName()
        await userdetailsPage.enterZipCode()
        await userdetailsPage.clickContinueBtn()
        await expect(page).toHaveURL(/.*checkout-step-two.html/)

        const ThankyouMsg = page.locator('.complete-header')
        await checkoutoverviewPage.clickFinishBtn()
        await expect(ThankyouMsg).toContainText('THANK YOU FOR YOUR ORDER')
    })

    test('Checkout Bike Light Test', async ({ page }) => {
        await loginPage.enterUsername(data.username)
        await loginPage.enterPassword(data.password)
        await loginPage.loginBtnClick()
        await expect(page).toHaveURL(/.*inventory.html/)

        await inventoryPage.addbikeLight()
        await inventoryPage.addToCart()
        await expect(page).toHaveURL(/.*cart.html/)

        await checkoutPage.checkoutClick()
        await expect(page).toHaveURL(/.*checkout-step-one.html/)

        await userdetailsPage.enterFirstName()
        await userdetailsPage.enterLastName()
        await userdetailsPage.enterZipCode()
        await userdetailsPage.clickContinueBtn()
        await expect(page).toHaveURL(/.*checkout-step-two.html/)

        const ThankyouMsg = page.locator('.complete-header')
        await checkoutoverviewPage.clickFinishBtn()
        await expect(ThankyouMsg).toContainText('THANK YOU FOR YOUR ORDER')
    })

    test('Checkout Fleece Jacket Test', async ({ page }) => {
        await loginPage.enterUsername(data.username)
        await loginPage.enterPassword(data.password)
        await loginPage.loginBtnClick()
        await expect(page).toHaveURL(/.*inventory.html/)

        await inventoryPage.addfleeceJaket()
        await inventoryPage.addToCart()
        await expect(page).toHaveURL(/.*cart.html/)

        await checkoutPage.checkoutClick()
        await expect(page).toHaveURL(/.*checkout-step-one.html/)

        await userdetailsPage.enterFirstName()
        await userdetailsPage.enterLastName()
        await userdetailsPage.enterZipCode()
        await userdetailsPage.clickContinueBtn()
        await expect(page).toHaveURL(/.*checkout-step-two.html/)

        const ThankyouMsg = page.locator('.complete-header')
        await checkoutoverviewPage.clickFinishBtn()
        await expect(ThankyouMsg).toContainText('THANK YOU FOR YOUR ORDER')
    })
})