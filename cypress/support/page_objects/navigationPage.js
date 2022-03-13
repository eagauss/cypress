export class navigationPage {

    forms() {
        return 'Forms'
    }

    practiceForm() {
        return 'Practice Form'
    }

    practiceFormPage() {
        cy.contains(this.forms()).click()
        cy.contains(this.practiceForm()).click()
    }
}

export const navigateTo = new navigationPage()