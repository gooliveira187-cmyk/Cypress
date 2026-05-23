describe ('Remover do carrinho', () => {

    it('Remover produto do carrinho de compra', () => {

         // Arrange
        cy.visit('https://www.saucedemo.com/')
      
        cy.get('[data-test="username"]').type('problem_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.screenshot('Logando com  usuário no sistema')

        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.screenshot('Produto Adicionado')

        cy.get('.shopping_cart_badge').click()

        cy.contains('Sauce Labs Bike Light').should('be.visible')

        //Act
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        

        //Assert
        cy.get('.shopping_cart_badge').should('not.exist')

        cy.screenshot('Produto Removido')
        

    
    })

})