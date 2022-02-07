import {ADD_USER_PAGE_ENDPOINT, BASE_URL, EDIT_TEST, USERS_DATA, EDIT_TEST_NUMBERS} from "../testData/testData";
import {
    addNewUser,
    checkThatNewUserDataShouldBeDisplayedInDashboard,
    editUserFromAnalytics,
    clickAddNewUserBtn,
    editUser,
    deleteUserFromAnalytics,
    checkThatDeletedUserNotExistInAnalytics
} from "../models/userPage";

describe("", () => {
    beforeEach(() => {
        cy.visit(BASE_URL + ADD_USER_PAGE_ENDPOINT);
    })
    it("", () => {
        clickAddNewUserBtn();
        addNewUser();
        checkThatNewUserDataShouldBeDisplayedInDashboard(USERS_DATA);
        editUserFromAnalytics();
        editUser(EDIT_TEST, EDIT_TEST_NUMBERS);
        deleteUserFromAnalytics();
        checkThatDeletedUserNotExistInAnalytics();
    });
})