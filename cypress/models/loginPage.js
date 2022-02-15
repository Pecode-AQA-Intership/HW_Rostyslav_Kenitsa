import LoginPage from '../page-objects/login.page';
import UniversalPages from '../page-objects/universal.pages';
import {FAKE_DATA} from "../testData/testData";

const universalPages = new UniversalPages();
const loginPage = new LoginPage();

export function fillInTheRegistrationFormAndClickTheSendButton() {
    loginPage.userNameField().type(FAKE_DATA.name).should("be.visible");
    loginPage.userEmailField().type(FAKE_DATA.email).should("be.visible");
    loginPage.currentAddress(0).type(FAKE_DATA.currentAddress).should("be.visible");
    loginPage.permanentAddress(0).type(FAKE_DATA.permanentAddress).should("be.visible");
    universalPages.submitButton().should("be.visible").click();
}

export function verifyEmailInResult(expectedEmail) {
    loginPage.resultEmail().should('contain', expectedEmail);
}

export function verifyNameInResult(expectedName) {
    loginPage.resultName().should('contain', expectedName);
}

export function verifyCurrentAddressInResult(currentAddress) {
    loginPage.resultCurrentAddress().should('contain', currentAddress);
}

export function verifyPermanentAddressInResult(permanentAddress) {
    loginPage.resultPermanentAddress().should('contain', permanentAddress);
}
