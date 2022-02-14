class UserPage {

    addUserBtn() {
        return cy.get('#addNewRecordButton').contains('Add');
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

    sortByName() {
        return cy.get('.rt-resizable-header-content');
    }
}

export default UserPage;