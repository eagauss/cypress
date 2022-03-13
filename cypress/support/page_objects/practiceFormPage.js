import {inputData} from "../../fixtures/data.json"
import {labels, values} from "../../fixtures/expects.json"

export class practiceFormPage {

    userForm() {
        return 'form#userForm'
    }

    firstName() {
        return '#firstName'
    }

    lastName() {
        return '#lastName'
    }

    userEmail() {
        return '#userEmail'
    }

    radioButton() {
        return '[type="radio"]'
    }

    userNumber() {
        return 'input#userNumber'
    }

    dateOfBirthInput() {
        return 'input#dateOfBirthInput'
    }

    datePicker() {
        return '.react-datepicker__day'
    }

    subjectsInput() {
        return 'input#subjectsInput'
    }

    checkBox() {
        return '[type="checkbox"]'
    }

    uploadPicture() {
        return 'input#uploadPicture'
    }

    currentAddressWrapper() {
        return '#currentAddress-wrapper'
    }

    textArea() {
        return 'textarea'
    }

    state() {
        return '#state'
    }

    tabIndex() {
        return '[tabindex="-1"]'
    }

    city() {
        return '#city'
    }

    modalContent() {
        return '.modal-content'
    }

    td() {
        return 'td'
    }

    closeLargeModal() {
        return '#closeLargeModal'
    }

    fillAndSubmitStudentRegistrationForm() {
        cy.get(this.userForm()).then(form => {
            cy.wrap(form).find(this.firstName())
                .type(inputData.firstName)
            cy.wrap(form).find(this.lastName())
                .type(inputData.lastName)
            cy.wrap(form).find(this.userEmail())
                .type(inputData.userEmail)
            cy.wrap(form).find(this.radioButton())
                .then((radioButtons) => {
                    cy.wrap(radioButtons)
                        .eq(inputData.gender)
                        .check({force: true})
                        .should('be.checked')
                })
            cy.wrap(form).find(this.userNumber())
                .type(inputData.mobile)
            cy.wrap(form).find(this.dateOfBirthInput())
                .then(input => {
                    cy.wrap(input).click()
                    cy.get(this.datePicker())
                        .contains(inputData.dateOfBirth).click()
                    cy.wrap(input).invoke('prop', 'value')
                        .should('contain', inputData.dateOfBirth)
                })
            cy.wrap(form).find(this.subjectsInput())
                .type(inputData.subject)
            cy.wrap(form).find(this.checkBox())
                .then((checkBoxes) => {
                    cy.wrap(checkBoxes)
                        .eq(inputData.hobbies)
                        .check({force: true})
                        .should('be.checked')
                })

            cy.wrap(form).find(this.uploadPicture())
                .attachFile(inputData.picture);
            cy.wrap(form).find(this.currentAddressWrapper())
                .find(this.textArea()).type(inputData.address)
            cy.wrap(form).find(this.state()).click()
            cy.wrap(form).find(this.tabIndex())
                .contains(inputData.state).click()
            cy.wrap(form).find(this.city()).click()
            cy.wrap(form).find(this.tabIndex())
                .contains(inputData.city).click({force: true})
            cy.wrap(form).submit()
        })
    }

    checkModalHeader() {
        cy.get(this.modalContent())
            .contains(values.modalHeader)
    }

    checkStudentName() {
        cy.get(this.modalContent()).find(this.td())
            .contains(labels.studentName)
            .parent().find(this.td())
            .contains(values.studentName)
    }

    checkStudentEmail() {
        cy.get(this.modalContent()).find(this.td())
            .contains(labels.studentEmail)
            .parent().find(this.td())
            .contains(values.studentEmail)
    }

    checkStudentGender() {
        cy.get(this.modalContent()).find(this.td())
            .contains(labels.studentGender)
            .parent().find(this.td())
            .contains(values.studentGender)
    }

    checkStudentMobile() {
        cy.get(this.modalContent()).find(this.td())
            .contains(labels.studentMobile)
            .parent().find(this.td())
            .contains(values.studentMobile)
    }

    checkStudentDateOfBirth() {
        cy.get(this.modalContent()).find(this.td())
            .contains(labels.studentDateOfBirth)
            .parent().find(this.td())
            .contains(values.studentDateOfBirth)
    }

    checkStudentSubjects() {
        cy.get(this.modalContent()).find(this.td())
            .contains(labels.studentSubject)
            .parent().find(this.td())
            .contains(values.studentSubject)
    }

    checkStudentHobbies() {
        cy.get(this.modalContent()).find(this.td())
            .contains(labels.studentHobbies)
            .parent().find(this.td())
            .contains(values.studentHobbies)
    }

    checkStudentPicture() {
        cy.get(this.modalContent()).find(this.td())
            .contains(labels.studentPicture)
            .parent().find(this.td())
            .contains(values.studentPicture)
    }

    checkStudentAddress() {
        cy.get(this.modalContent()).find(this.td())
            .contains(labels.studentAddress)
            .parent().find(this.td())
            .contains(values.studentAddress)
    }

    checkStudentStateAndCity() {
        cy.get(this.modalContent()).find(this.td())
            .contains(labels.studentStateAndCity)
            .parent().find(this.td())
            .contains(values.studentStateAndCity)
    }

    closeModal() {
        cy.get(this.modalContent())
            .find(this.closeLargeModal()).click()
    }

    checkModalClosed() {
        cy.get(this.modalContent()).should('not.exist')
    }
}

export const onPracticeFormPage = new practiceFormPage()