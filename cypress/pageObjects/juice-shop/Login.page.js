class LoginPage {
    static get newCustomerLink() {
        return cy.get("#newCustomerLink");
    }

    static get toasMessage() {
        return cy.get(".mat-simple-snack-bar-content");
    }

    static get emailField() {
        return cy.get("#email");
    }

    static get passwordField() {
        return cy.get("#password");
    }

    static get loginButton() {
        return cy.get("#loginButton");
    }

    static loginto(email, password) {
        this.emailField.type(email);
        this.passwordField.type(password);
        this.loginButton.click();
    }
}

export default LoginPage;