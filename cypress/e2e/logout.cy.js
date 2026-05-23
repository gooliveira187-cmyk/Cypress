describe('Logout', ()=> {
    
    beforeEach( ()=>{
        cy.visit('https://www.saucedemo.com/')
    })
    
    it('Fazendo logout com 1º conta', () => {
        //Arrange
        
        cy.get('[data-test="username"]').type('performance_glitch_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        cy.screenshot('user 1 logado')
        
        //Act

        cy.get('#react-burger-menu-btn').click()

        cy.get('[data-test="logout-sidebar-link"]').should('be.visible')
        .and('have.text','Logout')

        cy.screenshot('Clicando em logout para sair da Homepage')

        cy.get('#logout_sidebar_link').click()

        //Assert

        cy.contains('Accepted usernames are:').should('be.visible')

        cy.screenshot('Logout realizado com sucesso')

    })


    it('Fazendo logout com 2º conta', () => {

        //Arrange

        cy.get('[data-test="username"]').type('problem_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        cy.screenshot('user 2 logado')

        //Act

        cy.get('#react-burger-menu-btn').click()

        cy.get('[data-test="logout-sidebar-link"]').should('be.visible')
        .and('have.text','Logout')

        cy.screenshot('Clicando em logout para sair da Homepage')

        cy.get('#logout_sidebar_link').click()

        //Assert

        cy.contains('Accepted usernames are:').should('be.visible')

        cy.screenshot('Logout realizado com sucesso')
    })
})