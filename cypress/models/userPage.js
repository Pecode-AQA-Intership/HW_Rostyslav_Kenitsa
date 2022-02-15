import UserPage from '../page-objects/user.page';

import UniversalPages from '../page-objects/universal.pages';

import {FAKE_DATA} from "../testData/testData";

const universalPages = new UniversalPages();

const userPage = new UserPage();

export function clickAddNewUserButton() {
    userPage.addUserButton().click();
}

export function addNewUser() {
    userPage.userFirstNameField().type(FAKE_DATA.name);
    userPage.userLastNameField().type(FAKE_DATA.lastName);
    userPage.emailField().type(FAKE_DATA.email);
    userPage.userAge().type(FAKE_DATA.age);
    userPage.userSalary().type(FAKE_DATA.salary);
    userPage.userDepartment().type(FAKE_DATA.department);
    universalPages.submitButton().click();
}

export function verifyThatNewUserDataShouldBeDisplayedInDashboard(USERS_DATA) {
    for (let userData of USERS_DATA) {
        userPage.tableOfUsers().contains(FAKE_DATA.name).parent().contains(userData);
    }
}

export function editUserFromAnalytics() {
    userPage.tableOfUsers().contains(FAKE_DATA.name).parent().find('[id*="edit-record"]').click();
}

export function findUserInAnalytics(USERS_DATA) {
    for (let userData of USERS_DATA) {
        userPage.searchForm().clear().type(userData);
        userPage.searchButton().click();
        userPage.tableOfUsers().contains(userData).should('be.exist');
    }
    userPage.searchForm().clear();
}

export function getCellTextAsArray(n) {
    userPage.sortByName().eq(n).click();
    let cellContents = [];
    return new Cypress.Promise(resolve => {
        cy.get(`.rt-td:nth-child(${n + 1})`)
            .each(($el) => {
                cellContents.push($el.text());
            })
            .then(() => resolve(cellContents));
    });
}

export function verifyThatSortingWorkCorrect() {
    for (let n = 0; n < 6; n++) {
        switch (n) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 5:
                getCellTextAsArray(n).then(cellContents => {
                    let actual = cellContents.slice();
                    cy.wrap(actual).should("deep.eq", cellContents.sort());
                });
                break;
            case 4:
                getCellTextAsArray(n).then(cellContents => {
                    let actual = cellContents.slice();
                    cy.wrap(actual).should("deep.eq", actual.sort(function (a, b) {
                        return a - b
                    }));
                });
                break;
            default:
        }
    }
}

export function editUser(endpointName, endpointNumbers) {
    userPage.userFirstNameField().type(endpointName);
    userPage.userLastNameField().type(endpointName);
    userPage.emailField().clear().type(FAKE_DATA.email);
    userPage.userAge().type(endpointNumbers);
    userPage.userSalary().type(endpointNumbers);
    userPage.userDepartment().type(endpointName);
    universalPages.submitButton().click();
}

export function deleteUserFromAnalytics() {
    userPage.tableOfUsers().contains(FAKE_DATA.name).parent().find('[id*="delete-record"]').click();
}

export function verifyThatDeletedUserNotExistInAnalytics() {
    userPage.tableOfUsers().contains(FAKE_DATA.email).should('not.exist');
}
