describe("PM-00003: Update Employee", () => {

    const nav = Cypress.env('navigation')
    const emp = Cypress.env('employees')
    const update_employee = Cypress.env('update_employee')

    const employee_first_name = "PM-00003_first_name"
    const employee_last_name = "PM-00003_last_name"
    const employee_email = "PM-00003@email.com"
    // const employee_role = "Planter"

    const updated_employee_first_name = "PM-00003_first_name_updated"
    const updated_employee_last_name = "PM-00003_last_name_updated"
    const updated_employee_email = "PM-00003@updatedemail.com"
    const updated_employee_role = "Crewboss"

    it("Check ability to update employee", () => {
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
        emp.delete_employee_if_exists(employee_email)

        cy.log('I verify the planter does not exist')
        emp.validate_employee_not_exists(employee_email)

        cy.log('I create new planter')
        emp.create_planter(employee_first_name, employee_last_name, employee_email)

        cy.log('I wait for employees to load')
        cy.wait(1000)

        cy.log('I verify the creation of new planter')
        emp.validate_planter_create(employee_first_name, employee_last_name, employee_email)

        cy.log('I update the employee by email')
        emp.click_update_employee(employee_email)

        cy.log('I fill out updated employee information and click Update Employee')
        update_employee.update_employee(updated_employee_first_name, updated_employee_last_name, updated_employee_email, updated_employee_role)

        // cy.log('I delete planter with email "PM-00002@email.com" if exists')
        // emp.delete_employee_if_exists(employee_email)

        // cy.log('I wait for employees to load')
        // cy.wait(1000)

        // cy.log('I verify the planter does not exist')
        // emp.validate_employee_not_exists(employee_email)

    })

})