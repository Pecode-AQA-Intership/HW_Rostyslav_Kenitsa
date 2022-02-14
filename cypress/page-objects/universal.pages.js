class UniversalPages {

    submitBtn() {
        return cy.get('#submit')
    }

    userFirstNameField() {
        return cy.get('#firstName');
    }
    
    userLastNameField() {
        return cy.get('#lastName');
    }
    
    emailField() {
        return cy.get('#userEmail');
    }

    currentAddress() {
        return cy.get('#currentAddress');
    }
}

export default UniversalPages;