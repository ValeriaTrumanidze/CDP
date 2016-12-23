/**
 * Created by Valeriia_Trumanidze on 12/23/2016.
 */
"use strict";

class WishListPage {

    getProductCode() {
        return element(by.xpath("//span[@data-test='wishlist-item-75154-code']"));
    };
}
;

module.exports = new WishListPage();