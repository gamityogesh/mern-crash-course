import { test } from "@playwright/test";
import { POManager } from "../pageObject/POManager";
import dataset from '../test-data/addProductList.json' assert {type: "json"}
for (let data of dataset) {
    test(`add new product of ${data.productName}`, async ({ page }) => {
        const poManager = new POManager(page)
        const createPage = poManager.getCreatePage()
        await createPage.goTo()
        await createPage.addNewProduct(data.productName, data.price, data.imageURL)
    })

}
