class Employees {
    constructor(){
        this.first_name_input = "//label[contains(text(), 'First Name')]/..//input"
        this.last_name_input = "//label[contains(text(), 'Last Name')]/..//input"
        this.email_input = "//label[contains(text(), 'Email')]/..//input"
        this.planter_checkbox = "//label[contains(text(), 'Planter')]/..//input"
        this.creboss_checkbox = "//label[contains(text(), 'Crewboss')]/..//input"
        this.add_employee_btn = "//button[contains(text(), 'Add Employee')]"
    }
    
    // Check if employee email exists on page. If so, delete employee.
    delete_employee_if_exists(email){
        // let count = cy.xpath("count(//td[contains(text(), '" + employee_email + "')])")
        // cy.log("COUNT: " + parseInt(count))
        cy.xpath("count(//td[contains(text(), '" + email + "')])").then((count) => {

            cy.log("COUNT: " + count)
            if(count != 0){
                cy.xpath_click("//td[contains(text(), '" + email +"')]/..//button[contains(text(), 'Delete')]")
            }
        })
    }

    // Create a new planter.
    create_planter(first_name, last_name, email){
        cy.xpath_type(this.first_name_input, first_name)
        cy.xpath_type(this.last_name_input, last_name)
        cy.xpath_type(this.email_input, email)
        cy.xpath_click(this.planter_checkbox)
        cy.xpath_click(this.add_employee_btn)
    }

    // Validate that the employee email does not exist on page.
    validate_employee_not_exists(email){
        cy.xpath("//td[contains(text(), '" + email + "')]").should('not.exist')
    }

    // Validate that the planters first_name, last_name, email and role of "Planter" exists on page. 
    validate_planter_create(first_name, last_name, email){
        cy.xpath("//td[contains(text(), '" + first_name + "')]").should('exist')
        cy.xpath("//td[contains(text(), '" + last_name + "')]").should('exist')
        cy.xpath("//td[contains(text(), '" + email + "')]").should('exist')
        cy.xpath("//td[contains(text(), 'PM-00002@email.com')]/following-sibling::td/p[contains(text(), 'Planter')]").should('exist')
    }
}

export default Employees;