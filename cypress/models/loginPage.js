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
    universalPages.submitBtn().should("be.visible").click();
}

export function checkEmailInResult(expectedEmail) {
    loginPage.resultEmail().contains(expectedEmail);
}

export function checkNameInResult(expectedName) {
    loginPage.resultName().contains(expectedName);
}

export function checkCurrentAddressInResult(currentAddress) {
    loginPage.resultCurrentAddress().contains(currentAddress);
}

export function checkPermanentAddressInResult(permanentAddress) {
    loginPage.resultPermanentAddress().contains(permanentAddress);
}
