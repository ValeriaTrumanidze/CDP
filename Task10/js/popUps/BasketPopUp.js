/**
 * Created by Valeriia_Trumanidze on 12/23/2016.
 */
"use strict";
class BasketPopUp {
    getProductCode() {
        return element(by.xpath("//span[@data-test='item-product-code']"))
    };
}
;

module.exports = new BasketPopUp();
