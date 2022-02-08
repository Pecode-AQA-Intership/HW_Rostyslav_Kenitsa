class UserPage {

    addUserBtn() {
        return cy.get('#addNewRecordButton').contains('Add');
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

    userAge() {
        return cy.get('#age');
    }

    userSalary() {
        return cy.get('#salary');
    }

    userDepartment() {
        return cy.get('#department');
    }

    tableOfUsers() {
        return cy.get('.rt-tbody').find('[role=row]');
    }

    searchForm() {
        return cy.get('#searchBox');
    }

    searchBtn() {
        return cy.get('#basic-addon2');
    }
}

export default UserPage;