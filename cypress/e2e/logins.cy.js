describe ('Login', () => {

beforeEach(() => {
cy.visit('https://www.saucedemo.com/')
})

it ('Logar com primeiro usuário com sucesso', () => {
    
        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.screenshot('credenciais user 1')

        cy.get('[data-test="login-button"]').click()

        cy.screenshot('Logando com primeiro usuário')

      //Assert

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it ('Logar com segundo usuário com sucesso', () => {
    
        cy.get('[data-test="username"]').type('performance_glitch_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.screenshot('credenciais user 2')

        cy.get('[data-test="login-button"]').click()

        cy.screenshot('Logando com segundo usuário')

      //Assert

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it ('Logar com terceiro usuário com sucesso', () => {
    
        cy.get('[data-test="username"]').type('visual_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.screenshot('credenciais user 3')

        cy.get('[data-test="login-button"]').click()

        cy.screenshot('Logando com terceiro usuário')

      //Assert

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

}) 