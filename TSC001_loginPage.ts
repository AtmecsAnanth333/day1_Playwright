import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


describe("TSC001",()=>{

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    beforeAll(async()=>{
        browser=await chromium.launch({
         headless: false   
        })

    })

    test("Login positive_Jira101",()=>{});
})

 