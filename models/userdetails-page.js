exports.UserdetailsPage = class UserdetailsPage {
    constructor(page) {
        this.page = page
        this.firstNameField = page.locator('[data-test="firstName"]')
        this.lastNameField = page.locator('[data-test="lastName"]')
        this.zipcodeField = page.locator('[data-test="postalCode"]')
        this.continueBtn = page.locator('[data-test="continue"]')
    }
    //action
    async enterFirstName() {
        await this.firstNameField.fill("first")
    }
    async enterLastName() {
        await this.lastNameField.fill("last")
    }
    async enterZipCode() {
        await this.zipcodeField.fill("12345")
    }
    async clickContinueBtn() {
        await this.continueBtn.click()
    }
}