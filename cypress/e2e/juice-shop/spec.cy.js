import BasePage from "../../pageObjects/juice-shop/Base.page";
import RegistrationPage from "../../pageObjects/juice-shop/Registration.page";
import LoginPage from "../../pageObjects/juice-shop/Login.page";
import SearchPage from "../../pageObjects/juice-shop/Search.page";

describe("Juice Shop", () => {
    beforeEach(() => {
        BasePage.visit();
        BasePage.dialogCloseButton.click();
    });
    context("With no login", () => {
        it("Registration", () => {
            BasePage.navbarAccount.click();
            BasePage.navbarLoginButton.click();
            LoginPage.newCustomerLink.click();
            RegistrationPage.emailControl.type("test" + Math.floor(Math.random() * 100000) + "@test.com");
            RegistrationPage.passwordControl.type("12345678");
            RegistrationPage.repeatPasswordControl.type("12345678");
            RegistrationPage.selectQuestion.click();
            RegistrationPage.selectQuestionOption.contains("Your eldest siblings middle name?").click();
            RegistrationPage.securityAnswerControl.type("test");
            RegistrationPage.registerButton.click();
            LoginPage.toasMessage.should("be.visible");
            LoginPage.toasMessage.should("contain.text", "Registration completed successfully. You can now log in.");
        });
    });

    context("With login", () => {
        beforeEach(() => {
            BasePage.navbarAccount.click();
            BasePage.navbarLoginButton.click();
            LoginPage.loginto("demo", "demo");
        });

        it("Search for lemon juice", () => {
            BasePage.searchIcon.click();
            BasePage.searchField.type("lemon juice{enter}");
            SearchPage.product.contains("Lemon Juice").click();
            SearchPage.header.should("have.text", "Lemon Juice (500ml)");
        });

        it("Search for 500ml", () => {
            BasePage.searchIcon.click();
            BasePage.searchField.type("500ml{enter}");
            SearchPage.product.contains("Lemon Juice").click();
            SearchPage.header.should("have.text", "Lemon Juice (500ml)");
            SearchPage.closeDialog.click();
            SearchPage.product.contains("Strawberry Juice").click();
            SearchPage.header.should("have.text", "Strawberry Juice (500ml)");
            SearchPage.closeDialog.click();
            SearchPage.product.contains("Eggfruit Juice").click();
            SearchPage.header.should("have.text", "Eggfruit Juice (500ml)");
            SearchPage.closeDialog.click();
        });

        it("Filter product amount", () => {
            //Select 12
            BasePage.itemPerPageMenu.click();
            BasePage.itemPerPageOption.contains("12").click();
            SearchPage.product.should("have.length", 12);
            //Select 24
            BasePage.itemPerPageMenu.click();
            BasePage.itemPerPageOption.contains("24").click();
            SearchPage.product.should("have.length", 24);
            //Select 36
            BasePage.itemPerPageMenu.click();
            BasePage.itemPerPageOption.contains("36").click();
            SearchPage.product.should("have.length", 35);
        });

        it.only("Validate item review", () => {
            //Click on search icon
            BasePage.searchIcon.click();
            // type in the value king + enter key
            BasePage.searchField.type("king{enter}");
            //Open king of the hill
            SearchPage.product.contains("King of the Hill").click();
            //click on reviews
            SearchPage.reviewsButton.click();
            cy.wait(300);
            //Validate that we see K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
            SearchPage.reviews.contains("K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");

        });
    });
});