import LoginPage from '../page-objects/login.page';
import {NAME} from "../testData/testData";
const loginPage = new LoginPage();

export function fillInTheRegistrationFormAndClickTheSendButton() {
    loginPage.userNameField().type(NAME).should("be.visible");
    loginPage.userEmailField().type('john@gmail.com').should("be.visible");
    loginPage.currentAddress(0).type('johnjjfjgjj').should("be.visible");
    loginPage.permanentAddress(0).type('john53535').should("be.visible");
    loginPage.submitBtn().should("be.visible").click();
}

export function checkNameInResult(expectedName) {
    loginPage.resultName().contains(expectedName);
}

export function checkEmailInResult(expectedEmail) {
    loginPage.resultEmail().contains(expectedEmail);
}

export function checkCurrentAddressInResult(currentAddress) {
    loginPage.resultCurrentAddress().contains(currentAddress);
}

export function checkPermanentAddressInResult(permanentAddress) {
    loginPage.resultPermanentAddress().contains(permanentAddress);
}
