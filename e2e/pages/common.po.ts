import { browser, by, element, WebElement } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { assert } from 'chai';

export class CommonPage {

    private urlMap: Map<string, string> = new Map<string, string>();
    /** 
    *Navigates to given page using urlMap
    *
    *@param {string} pageName
    *
    */
    async navigateTo(pageName: string) {
        this.urlMap.set('home', '/');
        this.urlMap.set('nextPage', '/flights/air-BLR-BOM-20191025--1-0-0-E-D/');
        return browser.get(this.urlMap.get(pageName));

    }
    async inputValueGoibibo(text: string, inputfield: string) {
        await element(by.id(inputfield)).sendKeys(text);
        var options = element.all(by.xpath("//ul[@role='listbox']//li"))
        return await options.first().click();
    }
    async numericInputValueGoibibo(text: string, inputfield: string) {
        await element(by.id(inputfield)).sendKeys(text);
        // var options = element.all(by.xpath("//ul[@role='listbox']//li"))
        // return await options.first().click();
    }
    async departureDate(value: string,fieldName: string) {
        var date = element(by.id(value));
        browser.actions().mouseMove(date).perform();
        return await date.click();
    }
    async clickOnButtonGoibibo(buttonName: string) {
        return await element(by.id(buttonName)).click();
    }
    async getPriceInDecreasingOrder() {
        var ele = await browser.findElements(by.css('.alignItemsEnd span[data-cy=finalPrice]'));
        
    }
    async getErrorMessages(){
      
        return await browser.findElement(by.className('status_cont red ico13')).getText();
        
      
    }
}
