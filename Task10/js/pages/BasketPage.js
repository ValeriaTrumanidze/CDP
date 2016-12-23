/**
 * Created by Valeriia_Trumanidze on 12/23/2016.
 */
"use strict";
var waiter = require("../waiters/Waiter");

class BasketPage {
    addToBagButton() {
        return browser.element(by.css("div[class='overview__pickers']>.add-to-cart-button"));
    };

    addToWishList() {
        return browser.element(by.xpath("//button[@class='add-to-wishlist-button']"))
    };

    clickOnTheAddToTheBasketButton() {
        waiter.waitForElementVisibility(this.addToBagButton(), 5000);
        this.addToBagButton().click();
    };

    clickOnTheAddToWishListButton() {
        waiter.waitForElementVisibility(this.addToWishList(), 5000);
        this.addToWishList().click();
    };

    getProductName() {
        return browser.element(by.xpath("//h1[@class='overview__name']"))
    };
}
;

module.exports = new BasketPage();