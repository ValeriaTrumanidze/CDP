/**
 * Created by Valeriia_Trumanidze on 12/22/2016.
 */
"use strict";

class ProductCategoryPage {

    pageHeaderText() {
        return String("Products")
    };

    productsPageHeader() {
        return browser.element(by.css(".hgroup>h2"))
    }

    starWarsItem() {
        return browser.element(by.css("a[href*= 'StarWars']"));
    }

    clickOnTheStarWarsItem() {
        this.starWarsItem().click();
    };
}
;

module.exports = new ProductCategoryPage();