import {ADD_USER_PAGE_ENDPOINT, BASE_URL, EDIT_TEST, USERS_DATA, EDIT_TEST_NUMBERS} from "../testData/testData";
import {
    addNewUser,
    checkThatNewUserDataShouldBeDisplayedInDashboard,
    editUserFromAnalytics,
    clickAddNewUserBtn,
    editUser,
    deleteUserFromAnalytics,
    checkThatDeletedUserNotExistInAnalytics,
    findUserInAnalytics,
    sort
} from "../models/userPage";


describe("Verify that users analytics work correct", () => {

    beforeEach(() => {
        cy.visit(BASE_URL + ADD_USER_PAGE_ENDPOINT);
    })
    
    it("Check that user can be added, edit, searched, sorted and deleted from analytics", () => {
        clickAddNewUserBtn();
        addNewUser();
        checkThatNewUserDataShouldBeDisplayedInDashboard(USERS_DATA);
        editUserFromAnalytics();
        editUser(EDIT_TEST, EDIT_TEST_NUMBERS);
        findUserInAnalytics(USERS_DATA);
        deleteUserFromAnalytics();
        checkThatDeletedUserNotExistInAnalytics();
        sort();
    });
})