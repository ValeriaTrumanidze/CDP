/**
 * Created by Valeriia_Trumanidze on 12/22/2016.
 */
var waiter = require("../waiters/Waiter");

class ConfirmationPopUp {

    continueButton() {
        return browser.element(by.xpath("//a[text()='CONTINUE']"));
    };

    clickOnTheContinueButton() {
        waiter.waitWhileElementToBeClickable(this.continueButton(), 5000)
        this.continueButton().click();
    };
}
;
module.exports = new ConfirmationPopUp();
