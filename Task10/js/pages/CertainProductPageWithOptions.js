/**
 * Created by Valeriia_Trumanidze on 12/23/2016.
 */
"use strict";
var waiter = require("../waiters/Waiter");
class CertainProductPageWithOptions {
    basketIcon() {
        return browser.element(by.css("a[data-event-prefix='shopcheckprice']"))
    };

    clickOnTheBasketIcon() {
        waiter.waitWhileElementToBeClickable(this.basketIcon(), 7000);
        this.basketIcon().click();

    };


}
;
module.exports = new CertainProductPageWithOptions();