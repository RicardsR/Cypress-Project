class CheckBox {
    static get ulr() {
        return "https://demoqa.com/checkbox";
    }

    static visit() {
        cy.visit(this.ulr);
    }

    static get expandAll() {
        return cy.get(".rct-option-expand-all");
    }

    static get getTitle() {
        return cy.get(".rct-title");
    }

    static get resultText() {
        return cy.get(".text-success");
    }

    static get result() {
        return cy.get("#result");
    }
}

export default CheckBox;