import {onPracticeFormPage} from "../support/page_objects/practiceFormPage"
import {navigateTo} from "../support/page_objects/navigationPage";

describe('End-to-end test', () => {

    beforeEach('Open the Practice Form Page', () => {
        cy.visit('/')
    })

    it('fill and submit Student Registration Form', () => {
        navigateTo.practiceFormPage()
        onPracticeFormPage.fillAndSubmitStudentRegistrationForm()
        onPracticeFormPage.checkModalHeader()
        onPracticeFormPage.checkStudentName()
        onPracticeFormPage.checkStudentEmail()
        onPracticeFormPage.checkStudentGender()
        onPracticeFormPage.checkStudentMobile()
        onPracticeFormPage.checkStudentDateOfBirth()
        // onPracticeFormPage.checkStudentSubjects()
        onPracticeFormPage.checkStudentHobbies()
        onPracticeFormPage.checkStudentPicture()
        onPracticeFormPage.checkStudentAddress()
        onPracticeFormPage.checkStudentStateAndCity()
        onPracticeFormPage.closeModal()
        onPracticeFormPage.checkModalClosed()
    })

})