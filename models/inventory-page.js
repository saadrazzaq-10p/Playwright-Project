exports.InventoryPage = class InventoryPage {
    constructor(page) {
        this.page = page
        this.backPackAddToCardBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.bikeLightAddToCardBtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.fleeceJacketAddToCardBtn = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
        this.shoppingCartBtn = page.locator('.shopping_cart_container a')
        this.checkoutBtn = page.locator('[data-test="checkout"]')
    }
    //action
    async addbackPack() {
        await this.backPackAddToCardBtn.click()
    }
    async addbikeLight() {
        await this.bikeLightAddToCardBtn.click()
    }
    async addfleeceJaket() {
        await this.fleeceJacketAddToCardBtn.click()
    }
    async addToCart() {
        await this.shoppingCartBtn.click()
    }
}