import StudentForm from '../page-objects/student.form';
import UniversalPages from '../page-objects/universal.pages';
import {FAKE_DATA, SUBJECT} from "../testData/testData";
const universalPages = new UniversalPages();
const studentForm = new StudentForm();

export function clickAddNewUserBtn() {
    userPage.addUserBtn().click();
}

export function addNewStudent() {
    universalPages.userFirstNameField().type(FAKE_DATA.name);
    universalPages.userLastNameField().type(FAKE_DATA.lastName);
    universalPages.emailField().type(FAKE_DATA.email);
    studentForm.genderСhoice().check({force: true});
    studentForm.phoneNumber().type(FAKE_DATA.phoneNumber);
    selectDate();
    selectPhoto();
    universalPages.currentAddress().type(FAKE_DATA.currentAddress);
    studentForm.subjectField().type(SUBJECT);
    studentForm.hobbies().check({force: true});
    selectStateAndCity();
}

export function selectDate() {
    studentForm.dateOfBirth().click();
    studentForm.monthField().select(FAKE_DATA.month);
    studentForm.day().contains(FAKE_DATA.day).eq(0).click();
}

export function selectPhoto() {
    cy.fixture('images/student.png').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'student.png',
            mimeType: 'image/png'
        });
    });
}

export function selectStateAndCity() {
    studentForm.state().click();
    studentForm.state().find('[tabindex="-1"]').contains("NCR").click();
    studentForm.city().click();
    studentForm.city().find('[tabindex="-1"]').contains("Delhi").click();
}