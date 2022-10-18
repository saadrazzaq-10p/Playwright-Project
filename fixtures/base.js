const Base = require("@playwright/test");
const { LoginPage } = require("../Models/login-page");
const { HomeFeedPage } = require("../models/homefeed-page");
const { SearchPage } = require("../models/search-page");

exports.test = Base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },

    HomeFeedPage: async ({ page }, use) => {
        await use(new HomeFeedPage(page))
    },

    SearchPage: async ({ page }, use) => {
        await use(new SearchPage(page))
    }
})


exports.verify = Base.expect
exports.request = Base.request