/**
 * Created by Valeriia_Trumanidze on 12/23/2016.
 */
"use strict";

class HomePage {
    get url() {
        return String("https://www.lego.com/en-us")
    };

    productIcon() {
        return browser.element(by.css("a[class*= 'gn-icon-products']"))
    };

    navigateToTheUrl() {
        browser.get(this.url);
    }

    clickOnTheProductIcon() {
        this.productIcon().click();
    }
}
module.exports = new HomePage();