exports.HomeFeedPage = class HomeFeedPage {
    constructor(page) {
        this.page = page
        this.MyCommunitiesWidget = page.locator('[id=my-communities-section]')
        this.MyFriendsWidget = page.locator('[id=my-friends-section]')
        this.MyUploadsWidget = page.locator('[id=photo-stream-section]')
    }
    async verifyMyCommunitiedWidget() {
        await this.MyCommunitiesWidget.waitFor({ state: 'visible' });
        return await this.MyCommunitiesWidget.isVisible();
    }
   
    async verifyMyFriendsWidget() {
        await this.MyFriendsWidget.waitFor({ state: 'visible' });
        return await this.MyFriendsWidget.isVisible();
    }

    async verifyMyFriendsWidget() {
        await this.MyFriendsWidget.waitFor({ state: 'visible' });
        return await this.MyFriendsWidget.isVisible();
    }
    
    async verifyMyUploadsWidget() {
        await this.MyUploadsWidget.waitFor({ state: 'visible' });
        return await this.MyUploadsWidget.isVisible();
    }
}