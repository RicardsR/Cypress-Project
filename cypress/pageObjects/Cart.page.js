class CartPage {
    static get cartItem() {
        return cy.get(".cart_item");
    }

    static get checkoutButton() {
        return cy.get("#checkout");
    }

    static get removebackpackButton() {
        return cy.get("#remove-sauce-labs-backpack");
    }

    static get removeonesieButton() {
        return cy.get("#remove-sauce-labs-onesie");
    }

    static get removeboltTshirtButton() {
        return cy.get("#remove-sauce-labs-bolt-t-shirt");
    }


    static get firstNamInput() {
        return cy.get("#first-name");
    }

    static get lastNameInput() {
        return cy.get("#last-name");
    }

    static get zipCodeInput() {
        return cy.get("#postal-code");
    }

    static get continueButton() {
        return cy.get("#continue");
    }

    static get finishButton() {
        return cy.get("#finish");
    }

    static get CompleteHeader() {
        return cy.get(".complete-header");
    }

    static get CompleteText() {
        return cy.get(".complete-text");
    }

    static get BackHomeButton() {
        return cy.get("#back-to-products");
    }

    static get cartItemPrice() {
        return cy.get(".inventory_item_price");
    }

    static get totalAmount() {
        return cy.get(".summary_total_label");
    }

    static get cartItemName() {
        return cy.get(".inventory_item_name");
    }
}

export default CartPage;