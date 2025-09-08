const {test, expect} = require("@playwright/test")

test("verifithe error in the page", async ({page}) => {


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[name='password']").fill("amin123")
     await page.locator("button[type='submit']").click()
     const errormessage = await page.locator('xpath=//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p').textContent()
    
     console.log(errormessage)
     await page.close()
    
})  

