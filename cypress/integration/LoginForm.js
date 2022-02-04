import {
    checkCurrentAddressInResult,
    checkEmailInResult,
    checkNameInResult,
    checkPermanentAddressInResult,
    fillInTheRegistrationFormAndClickTheSendButton
} from "../models/loginPage";
import {NAME} from "../testData/testData";

describe("Log in", () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box');
    })

    it("Checks the username field present on the page", () => {
        fillInTheRegistrationFormAndClickTheSendButton();
        checkNameInResult(NAME);
        checkEmailInResult('john@gmail.com');
        checkCurrentAddressInResult('johnjjfjgjj');
        checkPermanentAddressInResult('john53535');
    });
})
