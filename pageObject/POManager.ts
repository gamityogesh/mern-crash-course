import { Page } from "@playwright/test";
import { CreatePage } from "./CreatePage";

export class POManager {
    readonly page: Page
    readonly createPage: CreatePage
    constructor(page: Page) {
        this.page = page
        this.createPage = new CreatePage(this.page)

    }
    getCreatePage() {
        return this.createPage
    }

}