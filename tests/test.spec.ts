import { expect, test } from "@playwright/test";
test("add product", async ({ page }) => {
    await page.goto('/')
    await expect(page.locator("a[href='/']")).toBeVisible()
    await expect(page.locator("a[href='/']")).toHaveText("Product Store 🛒")
    await page.locator("[href*='create']").first().click()
    await expect(page.locator("h1")).toBeVisible()
    await page.locator("input[placeholder='Product Name']").fill("iphone 15")
    await page.locator("input[placeholder='Price']").fill("150000")
    await page.locator("input[placeholder='Image URL']").fill("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMG38BTirLWT2Itfkx8JRGuM_VVuDvo62kg&s")
    await page.locator("button:has-text('Add Product')").click()
    await page.locator("a[href='/']").click()
    await expect(page.locator("h3:has-text('iphone 15')").last()).toHaveText("iphone 15")
})