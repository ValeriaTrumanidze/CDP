/**
 * Created by Valeriia_Trumanidze on 12/23/2016.
 */
"use strict";
var productsCategoryPage = require("../js/pages/ProductsCategoryPage");
var certainProductPage = require("../js/pages/CertainProductPage");
var certainProductPageWithOption = require("../js/pages/CertainProductPageWithOptions");
var certainProductMainPage = require("../js/pages/CertainProductMainPage");
var confirmationPopUp = require("../js/popUps/ConfirmationPopUp");
var basketPage = require("../js/pages/BasketPage");
var homePage = require("../js/pages/HomePage");
var waiter = require("../js/waiters/Waiter");
var menuItems = require("../js/pages/MenuItems");
var wishList = require("../js/pages/WishListPage");


describe("Lego Test Case 2 Scenario", () => {
    it("Verify navigate to home page function", () => {
        homePage.navigateToTheUrl();
        expect(homePage.productIcon().isDisplayed()).toBe(true);
    });
    it("Verify navigation to the products categories catalog", () => {
        homePage.clickOnTheProductIcon();
        expect(productsCategoryPage.productsPageHeader().isDisplayed()).toBe(true);
        expect(productsCategoryPage.productsPageHeader().getText()).toBe(productsCategoryPage.pageHeaderText());
    });
    it("Verify navigation to the main category page", () => {
        productsCategoryPage.clickOnTheStarWarsItem();
        expect(productsCategoryPage.starWarsItem().isDisplayed()).toBe(true);
    });
    it("Verify navigation to a products in products category", () => {
        certainProductMainPage.clickOnTheProductMenuItem();
        expect(certainProductPage.tieStrikerProduct().isDisplayed()).toBe(true);
    });
    it("Verify to concrete product page navigation", () => {
        certainProductPage.clickOnTheStrikerProduct();
        expect(certainProductPageWithOption.basketIcon().isDisplayed()).toBe(true);
    });
    it("Verify opportunity add a product into the wish list", () => {
        certainProductPageWithOption.clickOnTheBasketIcon();
        confirmationPopUp.clickOnTheContinueButton();
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        basketPage.clickOnTheAddToWishListButton();
        menuItems.clickOnWishListButton();
        waiter.waitWhileElementToBePresence(wishList.getProductCode(), 5000);
        expect(wishList.getProductCode().getText()).toBe(certainProductPage.productTextId());
    });
});
