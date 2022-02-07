class LoginPage {

    userNameField() {
        return cy.get('#userName')
    }

    userEmailField() {
        return cy.get('#userEmail')
    }

    currentAddress(index) {
        return cy.get('#currentAddress').eq(index);
    }

    permanentAddress(index) {
        return cy.get('#permanentAddress').eq(index);
    }

    resultName() {
        return cy.get('#name')
    }

    resultEmail() {
        return cy.get('#email')
    }

    resultCurrentAddress() {
        return cy.get('.mb-1').contains('Current Address')
    }

    resultPermanentAddress() {
        return cy.get('.mb-1').contains('Permananet Address')
    }

}

export default LoginPage;
