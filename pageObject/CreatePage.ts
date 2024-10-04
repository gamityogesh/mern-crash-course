import { Locator, Page, expect } from "@playwright/test"

export class CreatePage {
    readonly page: Page
    readonly productStoreLog: Locator
    readonly create: Locator
    readonly createNewProduct: Locator
    readonly productName: Locator
    readonly productPrice: Locator
    readonly imageURL: Locator
    readonly btnAddProduct: Locator
    constructor(page: Page) {
        this.page = page
        this.productStoreLog = page.locator("a[href='/']")
        this.create = page.locator("[href*='create']")
        this.createNewProduct = page.locator("h1")
        this.productName = page.locator("input[placeholder='Product Name']")
        this.productPrice = page.locator("input[placeholder='Price']")
        this.imageURL = page.locator("input[placeholder='Image URL']")
        this.btnAddProduct = page.locator("button:has-text('Add Product')")




    }
    async goTo() {
        await this.page.goto('/')
    }
    async addNewProduct(productName: string, price: string, imageURL: string) {
        await expect(this.productStoreLog).toBeVisible()
        await expect(this.productStoreLog).toBeVisible()
        await this.create.first().click()
        await expect(this.createNewProduct).toBeVisible()
        await this.productName.fill(productName)
        await this.productPrice.fill(price)
        await this.imageURL.fill(imageURL)
        await this.btnAddProduct.click()
        await this.productStoreLog.click()
        await expect((await this.getLocator(productName)).last()).toHaveText(productName)

    }
    async getLocator(productName: string) {
        return this.page.locator("h3:has-text('" + productName + "')")

    }



}