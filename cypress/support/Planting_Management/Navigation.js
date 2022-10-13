class Navigation {
    constructor() {
        this.profile_tab = "//a[@href='/profile']"
        this.about_tab = "//a[@href='/about']"
        this.projects_tab = "//a[@href='/projects']"
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
}

export default Navigation;