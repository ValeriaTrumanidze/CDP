/**
 * Created by Valeriia_Trumanidze on 12/23/2016.
 */
"use strict";

class CertainProductMainPage {

    productMenuItem() {
        return browser.element(by.xpath("//div[@class='grid-column']//nav[@role='navigation']//a[contains(@href,'products')]"));
    };

    clickOnTheProductMenuItem() {
        this.productMenuItem().click();
    }

}
;
module.exports = new CertainProductMainPage();
