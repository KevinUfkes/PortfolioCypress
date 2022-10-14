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

    profile(){
        cy.xpath_click(this.profile_tab)
    }

    about(){
        cy.xpath_click(this.about_tab)
    }

    projects(){
        cy.xpath_click(this.projects_tab)
    }

    planting_management(){
        cy.xpath_click(this.planting_management_tab)
    }

    employees(){
        cy.xpath_click(this.employees_tab)
    }
}

export default Navigation;