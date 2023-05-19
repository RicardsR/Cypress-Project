class RegistrationPage {
    static get emailControl() {
        return cy.get("#emailControl");
    }

    static get passwordControl() {
        return cy.get("#passwordControl");
    }

    static get repeatPasswordControl() {
        return cy.get("#repeatPasswordControl");
    }

    static get selectQuestion() {
        return cy.get("mat-select[role='combobox']");
    }

    static get selectQuestionOption() {
        return cy.get(".mat-option-text");
    }

    static get securityAnswerControl() {
        return cy.get("#securityAnswerControl");
    }

    static get registerButton() {
        return cy.get("#registerButton");
    }

}

export default RegistrationPage;