class TextBoxPage {
    static get url() {
        return "https://demoqa.com/text-box";
    }

    static visit() {
        cy.visit(this.url);
    }

    static get userName() {
        return cy.get("#userName");
    }

    static get userEmail() {
        return cy.get("#userEmail");
    }

    static get currentAddress() {
        return cy.get("#currentAddress");
    }

    static get permanentAddress() {
        return cy.get("#permanentAddress");
    }

    static get submitButton() {
        return cy.get("#submit");
    }

    static get resultName() {
        return cy.get("#name");
    }

    static get resultEmail() {
        return cy.get("#email");
    }

    static get resultCurrentAddress() {
        return cy.get("#output #currentAddress");
    }

    static get resultPermanentAddress() {
        return cy.get("#output #permanentAddress");
    }

    static emailErrorInput() {
        return cy.get("#userEmail").should("have.class", "field-error");
    }
}

export default TextBoxPage;