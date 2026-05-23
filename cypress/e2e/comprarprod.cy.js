describe ('Comprar produto', () => {

    it('Adicionar produto ao carrinho e efetuar compra', () => {

        // Arrange
        cy.visit('https://www.saucedemo.com/')
      
        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.screenshot('Logando com  usuário no sistema')

        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.screenshot('Produto Adicionado')

        cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', 1)

        cy.get('#shopping_cart_container').click()

        cy.contains('Sauce Labs Backpack').should('be.visible')
        
        

        //Act 
        cy.get('[data-test="checkout"]').click()


        cy.get('[data-test="title"]')
        .should('be.visible')
        .and('have.text', 'Checkout: Your Information')

        cy.get('#first-name').type('Gabriel')

        cy.get('#last-name').type('Nascimento')

        cy.get('#postal-code').type('06764-020')

        cy.screenshot('Preenchendo dados pessoais para continuar com a compra')

        cy.get('#continue').click()

        cy.get('.title').should('be.visible')
        .and('have.text','Checkout: Overview')

        cy.screenshot('Finalizando a compra com as informações gerais')

        cy.get('#finish').click()

        //Assert

        cy.get('.title').should('be.visible').
        and('have.text','Checkout: Complete!')

        cy.screenshot('Compra Finalizada com sucesso!')

    })

})