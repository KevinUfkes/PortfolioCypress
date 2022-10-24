class Navigation {
    constructor() {
        // Main Navigation
        this.profile_tab = "//a[@href='/profile']"
        this.about_tab = "//a[@href='/about']"
        this.projects_tab = "//a[@href='/projects']"

        // Projects Navigation
        this.planting_management_tab = "(//a[@href='/projects/planting_management'])[1]"
        this.employees_tab = "(//a[@href='/projects/planting_management/employees'])[1]"
    }

    // Click Profile link.
    profile(){
        cy.xpath_click(this.profile_tab)
    }

    // Click About link.
    about(){
        cy.xpath_click(this.about_tab)
    }

    // Click Projects link.
    projects(){
        cy.xpath_click(this.projects_tab)
    }

    // Click Planting Management link.
    planting_management(){
        cy.xpath_click(this.planting_management_tab)
    }

    // Click Employees link
    employees(){
        cy.xpath_click(this.employees_tab)
    }
}

export default Navigation;