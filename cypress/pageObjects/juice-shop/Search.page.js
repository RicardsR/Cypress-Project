class SearchPage {
    static get url() {
        return "http://localhost:3000/#/search";
    }

    static visit() {
        cy.visit(this.url);
    }

    static get product() {
        return cy.get(".product");
    }

    static get header() {
        return cy.get("h1");
    }

    static get closeDialog() {
        return cy.get(".close-dialog");
    }

    static get reviewsButton() {
        return cy.get('.mat-expansion-indicator');
    }

    static get reviews() {
        return cy.get(".review-text");
    }
}

export default SearchPage;