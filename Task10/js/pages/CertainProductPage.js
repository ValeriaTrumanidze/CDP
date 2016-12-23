/**
 * Created by Valeriia_Trumanidze on 12/23/2016.
 */
"use strict";

class CertainProductPage {
    productTextId() {
        return "75154";
    }

    tieStrikerProduct() {
        return browser.element(by.css("a[href*='tie-striker-75154']"));
    }

    tieStriketProductId() {
        return browser.element(by.xpath("//a[contains(@href,'tie-striker-75154')]//span[@itemprop='identifier']"));
    }

    clickOnTheStrikerProduct() {
        this.tieStrikerProduct().click();
    };
}
;
module.exports = new CertainProductPage();
