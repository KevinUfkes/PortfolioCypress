class UpdateEmployees{
    constructor(){
        this.first_name_input = "//label[contains(text(), 'First Name')]/..//input"
        this.last_name_input = "//label[contains(text(), 'Last Name')]/..//input"
        this.email_input = "//label[contains(text(), 'Email')]/..//input"
        this.planter_checkbox = "//label[contains(text(), 'Planter')]/..//input"
        this.crewwboss_checkbox = "//label[contains(text(), 'Crewboss')]/..//input"
        this.update_employee_btn = "//button[contains(text(), 'Update Employee')]"
    }

    update_employee(first_name, last_name, email, role){
        cy.xpath_type(this.first_name_input, first_name)
        cy.xpath_type(this.last_name_input, last_name)
        cy.xpath_type(this.email_input, email)
        cy.xpath_click(this.crewwboss_checkbox)
        // if(role=="Planter"){
        //     cy.xpath_click(this.planter_checkbox)
        // }else if(role=="Crewboss"){
        //     cy.xpath_click(this.crewboss_checkbox)
        // }
        cy.xpath_click(this.update_employee_btn)
    }
}

export default UpdateEmployees;