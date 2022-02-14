class StudentForm {

    genderСhoice() {
        return cy.get('#gender-radio-1');
    }

    phoneNumber() {
        return cy.get('#userNumber');
    }

    day() {
        return cy.get('.react-datepicker__day');
    }
    
    monthField() {
        return cy.get('.react-datepicker__month-select');
    }
    
    monthDropdown() {
        return cy.get('.react-datepicker__month-select');
    }

    yearField() {
        return cy.get('.react-datepicker__year-select');
    }

    dateOfBirth() {
        return cy.get('#dateOfBirthInput');
    }

    subjectField() {
        return cy.get('#subjectsContainer');
    }

    hobbies() {
        return cy.get('#hobbies-checkbox-1');
    }

    state() {
        return cy.get('#state');
    }

    city(){
        return cy.get('#city');
    }
}

export default StudentForm;