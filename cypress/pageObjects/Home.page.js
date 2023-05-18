class HomePage {
    static get menuButton() {
        return cy.get("#react-burger-menu-btn");
    }

    static get logoutButton() {
        return cy.get("#logout_sidebar_link");
    }

    static get cartButton() {
        return cy.get("#shopping_cart_container");
    }

    static get cartBadge() {
        return cy.get(".shopping_cart_badge");
    }

    static get onesieAddToCartButton() {
        return cy.get("#add-to-cart-sauce-labs-onesie");
    }

    static get backpackAddToCartButton() {
        return cy.get("#add-to-cart-sauce-labs-backpack");
    }

    static get itemNames() {
        return cy.get(".inventory_item_name");
    }

    static get itemDetailsTitle() {
        return cy.get(".inventory_details_name");
    }

    static get boltTshirtAddToCartButton() {
        return cy.get("#add-to-cart-sauce-labs-bolt-t-shirt");
    }

    static get title() {
        return cy.get(".title");
    }

    static get addToCartButton() {
        return cy.get(".btn_inventory");
    }

}

export default HomePage;