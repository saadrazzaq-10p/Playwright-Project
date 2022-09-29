exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.usernameField = page.locator('[placeholder="Username"]')
        this.passwordField = page.locator('[data-test="password"]')
        this.loginBtn = page.locator('[data-test="login-button"]')
    }
    //action
    async navigate() {
        await this.page.goto("/")
    }
    async enterUsername(username) {
        await this.usernameField.fill(username)
    }
    async enterPassword(password) {
        await this.passwordField.fill(password)
    }
    async loginBtnClick() {
        await this.loginBtn.click()
    }
}