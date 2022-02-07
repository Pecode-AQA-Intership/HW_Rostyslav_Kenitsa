import {
    checkCurrentAddressInResult,
    checkEmailInResult,
    checkNameInResult,
    checkPermanentAddressInResult,
    fillInTheRegistrationFormAndClickTheSendButton
} from "../models/loginPage";
import {BASE_URL, FAKE_DATA, LOGIN_PAGE_ENDPOINT} from "../testData/testData";

describe("Verify that the login form works correctly", () => {
    beforeEach(() => {
        cy.visit(BASE_URL + LOGIN_PAGE_ENDPOINT);
    })

    it("Check that the entered data is correctly displayed in the result field", () => {
        fillInTheRegistrationFormAndClickTheSendButton();
        checkNameInResult(FAKE_DATA.name);
        checkEmailInResult(FAKE_DATA.email);
        checkCurrentAddressInResult(FAKE_DATA.currentAddress);
        checkPermanentAddressInResult(FAKE_DATA.permanentAddress);
        fillInTheRegistrationFormAndClickTheSendButton(EDIT_TEST);
    });
})
