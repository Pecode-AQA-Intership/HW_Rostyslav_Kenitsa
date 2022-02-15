import {
    verifyCurrentAddressInResult,
    verifyEmailInResult,
    verifyNameInResult,
    verifyPermanentAddressInResult,
    fillInTheRegistrationFormAndClickTheSendButton
} from "../models/loginPage";
import {BASE_URL, FAKE_DATA, LOGIN_PAGE_ENDPOINT} from "../testData/testData";

describe("Verify that the login form works correctly", () => {
    beforeEach(() => {
        cy.visit('/' + LOGIN_PAGE_ENDPOINT);
    })

    it("Check that the entered data is correctly displayed in the result field", () => {
        fillInTheRegistrationFormAndClickTheSendButton();
        verifyNameInResult(FAKE_DATA.name);
        verifyEmailInResult(FAKE_DATA.email);
        verifyCurrentAddressInResult(FAKE_DATA.currentAddress);
        verifyPermanentAddressInResult(FAKE_DATA.permanentAddress);
        fillInTheRegistrationFormAndClickTheSendButton(EDIT_TEST);
    });
})
