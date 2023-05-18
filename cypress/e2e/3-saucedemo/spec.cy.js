import LoginPage from "../../pageObjects/Login.page";
import HomePage from "../../pageObjects/Home.page";
import CartPage from "../../pageObjects/Cart.page";

describe("Saucedemo", () => {
    beforeEach(() => {
        LoginPage.visit();
    });

    it("1.1) Login scenario - Positive case", () => {
        LoginPage.logIntoPage("standard_user", "secret_sauce");
        HomePage.title.should("contain", "Products");
    });

    it("1.2) Login scenario - Negative case", () => {
        LoginPage.logIntoPage("standard_user", "xxxxxx");
        LoginPage.errorMessage.should("contain", "Username and password do not match any user in this service");
    });

    it("1.3) Logout scenario", () => {
        LoginPage.logIntoPage("standard_user", "secret_sauce");
        HomePage.menuButton.click();
        HomePage.logoutButton.click();
        LoginPage.loginButton.should("be.visible");
    });

    it("2.1) Add 3 items to cart", () => {
        LoginPage.logIntoPage("standard_user", "secret_sauce");
        HomePage.onesieAddToCartButton.click();
        HomePage.boltTshirtAddToCartButton.click();
        HomePage.backpackAddToCartButton.click();
        HomePage.cartBadge.should("contain", "3");
        HomePage.cartButton.click();
        CartPage.cartItem.should("have.length", 3);
    });

    it("2.2) Remove 3 items from cart", () => {
        LoginPage.logIntoPage("standard_user", "secret_sauce");
        HomePage.onesieAddToCartButton.click();
        HomePage.boltTshirtAddToCartButton.click();
        HomePage.backpackAddToCartButton.click();
        HomePage.cartBadge.scrollIntoView().should("contain", "3");
        HomePage.cartButton.click();
        CartPage.cartItem.should("have.length", 3);
        CartPage.removebackpackButton.click();
        CartPage.removeonesieButton.click();
        CartPage.removeboltTshirtButton.click();
        CartPage.cartItem.should("have.length", 0);
    });

    it("2.3) Checkout 3 items", () => {
        LoginPage.logIntoPage("standard_user", "secret_sauce");
        HomePage.onesieAddToCartButton.click();
        HomePage.boltTshirtAddToCartButton.click();
        HomePage.backpackAddToCartButton.click();
        HomePage.cartBadge.scrollIntoView().should("contain", "3");
        HomePage.cartButton.click();
        CartPage.cartItem.should("have.length", 3);
        CartPage.checkoutButton.click();
        CartPage.firstNamInput.type("Richard");
        CartPage.lastNameInput.type("Rein");
        CartPage.zipCodeInput.type("123123");
        CartPage.continueButton.click();
        CartPage.cartItem.should("have.length", 3);
        CartPage.cartItemPrice.should("contain", "29.99");
        CartPage.cartItemPrice.should("contain", "15.99");
        CartPage.cartItemPrice.should("contain", "7.99");
        CartPage.totalAmount.should("contain", "58.29");
        CartPage.finishButton.click();
        CartPage.CompleteHeader.should("contain", "Thank you for your order!");
        CartPage.CompleteText.should("contain", "Your order has been dispatched, and will arrive just as fast as the pony can get there!");
        CartPage.BackHomeButton.click();
        HomePage.title.should("contain", "Products");
    });

    it.only("3.1) Open Sauce Labs Backpack details and add it to cart", () => {
        LoginPage.logIntoPage("standard_user", "secret_sauce");
        HomePage.itemNames.should("contain", "Sauce Labs Backpack");
        HomePage.itemNames.contains("Sauce Labs Backpack").click();
        HomePage.itemDetailsTitle.should("contain", "Sauce Labs Backpack");
        HomePage.addToCartButton.click();
        HomePage.cartBadge.scrollIntoView().should("contain", "1");
        HomePage.cartButton.click();
        CartPage.cartItem.should("have.length", 1);
        CartPage.cartItemName.should("contain", "Sauce Labs Backpack");
    });
});