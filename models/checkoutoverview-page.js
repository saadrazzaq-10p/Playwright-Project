exports.CheckoutOverviewPage = class CheckoutOverviewPage {
    constructor(page) {
        this.page = page
        this.FinishBtn = page.locator('[data-test="finish"]')
    }
    //action
    async clickFinishBtn() {
        await this.FinishBtn.click()
    }
}