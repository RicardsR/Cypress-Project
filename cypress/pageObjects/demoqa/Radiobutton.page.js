class RadioPage {
    static get url() {
        return "https://demoqa.com/radio-button";
    }

    static visit() {
        cy.visit(this.url);
    }

    static get yesRadio() {
        return cy.get("#yesRadio");
    }

    static get impressiveRadio() {
        return cy.get("#impressiveRadio");
    }

    static get noRadio() {
        return cy.get("#noRadio");
    }

}

export default RadioPage;