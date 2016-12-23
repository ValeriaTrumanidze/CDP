/**
 * Created by Valeriia_Trumanidze on 12/23/2016.
 */
"use strict";

class Waiter {
    waitWhileElementToBeClickable(element, timeouts) {
        var expectedConditions = protractor.ExpectedConditions.elementToBeClickable(element);
        browser.wait(expectedConditions, timeouts);
    };

    waitWhileElementToBePresence(element, timeout) {
        var expectedConditions = protractor.ExpectedConditions.presenceOf(element);
        browser.wait(expectedConditions, timeout);
    };

    waitForElementVisibility(element, timeouts) {
        var expectedConditions = protractor.ExpectedConditions.visibilityOf(element);
        browser.wait(expectedConditions, timeouts);
    };
}
;
module.exports = new Waiter();