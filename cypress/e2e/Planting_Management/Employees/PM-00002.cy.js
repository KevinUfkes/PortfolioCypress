describe('PM-00002: Add New Planter', () => {
    const nav = Cypress.env('navigation')
    const emp = Cypress.env('employees')

    const planter_first_name = "PM-00002_first_name"
    const planter_last_name = "PM-00002_last_name"
    const planter_email = "PM-00002@email.com"

    it('Test ability to create new employee', () => {
        cy.log('I visit www.kevinufkes.ca homepage')
        cy.visit_portfolio()

        cy.log('I navigate to Projects page')
        nav.projects()

        cy.log('I navigate to Planting Management Project')
        nav.planting_management()

        cy.log('I navigate to Employees page')
        nav.employees()

        cy.log('I wait for employees to load')
        cy.wait(1000)

        cy.log('I delete planter with email "PM-00002@email.com" if exists')
        emp.delete_employee_if_exists(planter_email)

        cy.log('I verify the planter does not exist')
        emp.validate_employee_not_exists(planter_email)

        cy.log('I create new planter')
        emp.create_planter(planter_first_name, planter_last_name, planter_email)

        cy.log('I wait for employees to load')
        cy.wait(1000)

        cy.log('I verify the creation of new planter')
        emp.validate_planter_create(planter_first_name, planter_last_name, planter_email)

        cy.log('I delete planter with email "PM-00002@email.com" if exists')
        emp.delete_employee_if_exists(planter_email)

        cy.log('I wait for employees to load')
        cy.wait(1000)

        cy.log('I verify the planter does not exist')
        emp.validate_employee_not_exists(planter_email)
    })
})