import {
    addNewStudent
} from "../models/studentForm";

describe("", () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
    })

    it("", () => {
        addNewStudent();
    });
})