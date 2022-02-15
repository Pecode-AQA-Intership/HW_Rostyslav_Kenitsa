import {
    ADD_USER_PAGE_ENDPOINT,
    BASE_URL,
    EDIT_TEST,
    USERS_DATA,
    EDIT_TEST_NUMBERS
} from "../testData/testData";

import {
    addNewUser,
    verifyThatNewUserDataShouldBeDisplayedInDashboard,
    editUserFromAnalytics,
    clickAddNewUserButton,
    editUser,
    deleteUserFromAnalytics,
    verifyThatDeletedUserNotExistInAnalytics,
    findUserInAnalytics,
    verifyThatSortingWorkCorrect
} from "../models/userPage";

describe("Verify that users analytics work correct", () => {

    beforeEach(() => {
        cy.visit('/' + ADD_USER_PAGE_ENDPOINT);
    })

    it("Check that user will be added from analytics", () => {
        clickAddNewUserButton();
        addNewUser();
        verifyThatNewUserDataShouldBeDisplayedInDashboard(USERS_DATA);
    });

    it("Check that user can be edit from analytics", () => {
        clickAddNewUserButton();
        addNewUser();
        editUserFromAnalytics();
    });

    it("Check that user can be searched from analytics", () => {
        clickAddNewUserButton();
        addNewUser();
        findUserInAnalytics(USERS_DATA);
    });

    it("Check that user can be deleted from analytics", () => {
        clickAddNewUserButton();
        addNewUser();
        deleteUserFromAnalytics();
        verifyThatDeletedUserNotExistInAnalytics();
    });

    it("Check that user can be searched from analytics", () => {
        verifyThatSortingWorkCorrect();
    });
})