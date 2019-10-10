import { Before, After, HookScenarioResult, Status } from "cucumber";
import { browser } from 'protractor';

Before({
    tags: "@current",
},
    async (value) => {
        console.log('\n Executing before feature!');
        console.log(value.pickle.name);
        browser.ignoreSynchronization = false;
        browser.waitForAngularEnabled(false);
    });

After(async function (scenario: HookScenarioResult) {
    if (scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});
