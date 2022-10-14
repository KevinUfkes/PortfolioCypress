describe('PM-00001: First Test', () => {

    const nav = Cypress.env('navigation')

    it("First it", () => {
        cy.log('I visit the Portforlio site')
        cy.visit_portfolio();

        cy.log('I click on the About tab')
        nav.about()

        cy.log('I click on the Projects tab')
        nav.projects()

        cy.log('I click on the Profile tab')
        nav.profile()
    })
    
})