exports.SearchPage = class SearchPage {
    constructor(page) {
        this.page = page
        this.SearchField = page.locator('[id=search_textbox]')
        this.SearchBtn = page.locator('[id=searchBtn]')
        this.SearchResultCount = page.locator('[id=search_result_count_total]')
    }
    async navigatetoSearch() {
        await this.page.goto('/search')
    }

    async verifySearchField() {
        await this.SearchField.waitFor({ state: 'visible' });
        return await this.SearchField.isVisible();
    }

    async verifySearchButton() {
        await this.SearchBtn.waitFor({ state: 'visible' });
        return await this.SearchBtn.isVisible();
    }

    async verifySearchFunctionality(text) {
        await this.SearchField.fill(text)
        await this.SearchBtn.click()
    }
}