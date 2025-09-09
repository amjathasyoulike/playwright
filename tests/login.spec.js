const {test, expect} = require("@playwright/test")

test("login test", async ({page}) => {


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page.viewportSize().width)
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[name='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.getByAltText("profile picture").click()
    await page.getByText("Logout").click()

    await page.waitForTimeout(3000)
    await expect(page).toHaveTitle(/OrangeHRM/)
})  

