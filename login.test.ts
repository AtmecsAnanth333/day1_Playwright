import { test, chromium } from "@playwright/test";

    test('Open Letcode', async()=>{
        const browser = await chromium.launch({
           headless : false
        })

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.saucedemo.com/')
        await browser.close()
    })