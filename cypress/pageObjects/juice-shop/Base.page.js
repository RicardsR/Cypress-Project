class BasePage {
    static get url() {
        return "http://localhost:3000/";
    }

    static visit() {
        cy.visit(this.url);
    }

    static get dialogCloseButton() {
        return cy.get(".close-dialog");
    }

    static get navbarAccount() {
        return cy.get("#navbarAccount");
    }

    static get navbarLoginButton() {
        return cy.get("#navbarLoginButton");
    }

    static get searchIcon() {
        return cy.get("#searchQuery");
    }

    static get searchField() {
        return cy.get(".mat-search_field");
    }

    static get itemPerPageMenu() {
        return cy.get("mat-select[aria-label='Items per page:']");
    }

    static get itemPerPageOption() {
        return cy.get(".mat-option-text");
    }

}

export default BasePage;