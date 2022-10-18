exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.usernameField = page.locator('[id="email"]')
        this.passwordField = page.locator('[id="pw"]')
        this.loginBtn = page.locator('[id="login_submit"]')
        this.signInBtn = page.locator('[id="logIn"]')
    }
    async navigatetoLogin() {
        await this.page.goto('/login')
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
    async loginUser(user, pwd) {
        await this.usernameField.fill(user)
        await this.passwordField.fill(pwd)
        await this.loginBtn.click()
    }
}
