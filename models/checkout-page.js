exports.CheckoutPage = class CheckoutPage {
    constructor(page) {
        this.page = page
        this.checkoutBtn = page.locator('[data-test="checkout"]')
    }
    //action
    async checkoutClick() {
        await this.checkoutBtn.click()
    }
}