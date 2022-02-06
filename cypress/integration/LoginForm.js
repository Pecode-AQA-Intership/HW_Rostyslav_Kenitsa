import {
    checkCurrentAddressInResult,
    checkEmailInResult,
    checkNameInResult,
    checkPermanentAddressInResult,
    fillInTheRegistrationFormAndClickTheSendButton
} from "../models/loginPage";
import {BASE_URL, FAKE_DATA} from "../testData/testData";

describe("Verify that the login form works correctly", () => {
    beforeEach(() => {
        cy.visit(BASE_URL);
    })

    it("Check that the entered data is correctly displayed in the result field", () => {
        fillInTheRegistrationFormAndClickTheSendButton();
        checkNameInResult(FAKE_DATA.name);
        checkEmailInResult(FAKE_DATA.email);
        checkCurrentAddressInResult(FAKE_DATA.currentAddress);
        checkPermanentAddressInResult(FAKE_DATA.permanentAddress);
    });
})
