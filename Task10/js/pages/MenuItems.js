/**
 * Created by Valeriia_Trumanidze on 12/23/2016.
 */
"use strict";
var waiter = require("../waiters/Waiter");
class MenuItems {
    basketButton() {
        return browser.element(by.xpath("//div[@id='util-bar-dropdown-cart']"));
    };

    wishListButton() {
        return browser.element(by.xpath("//a[@class='util-bar__link-wishlist']"));
    };

    clickOnTheBasketButton() {
        waiter.waitWhileElementToBeClickable(this.basketButton(), 5000);
        this.basketButton().click();
    };

    clickOnWishListButton() {
        waiter.waitWhileElementToBeClickable(this.wishListButton(), 5000);
        this.wishListButton().click();
    };

}
;

module.exports = new MenuItems();