import { When, Then, Before, Given, setDefaultTimeout } from 'cucumber';
import { CommonPage } from '../pages/common.po';
import { assert } from 'chai';

let commonPage: CommonPage;
setDefaultTimeout(60 * 3000);

Before(() => {
    commonPage = new CommonPage();
});

Given('I am on the {string} page', async (pageName: string) => commonPage.navigateTo(pageName));

When('I enter {string} into the {string} input field on Goibibo', async (text: string, inputfield: string) => commonPage.inputValueGoibibo(text, inputfield));

When('I enter {string} into the {string} input field on Goibibo for incorrect value', async (text: string, inputfield: string) => commonPage.numericInputValueGoibibo(text, inputfield));

When('I select the departure date as {string} from {string} calendar', async (value: string, fieldName) => commonPage.departureDate(value, fieldName));

Then('I click the {string} button on Goibibo', async (buttonName: string) => commonPage.clickOnButtonGoibibo(buttonName));

Then('the {string} page should be loaded', async (pageName: string) => commonPage.navigateTo(pageName));

Then('I should get the price in decreasing order', async () => commonPage.getPriceInDecreasingOrder());

Then('the error message should say {string}', async (expectedMsg: string) => {
    let actualMsg: string = await commonPage.getErrorMessages();
    assert.equal(actualMsg, expectedMsg);
 }); 
