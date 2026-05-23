describe ('Ordenar e filtrar produto', () => {

    it('Ordenar de Z-A', () => {

        // Arrange
        cy.visit('https://www.saucedemo.com/')
      
        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        //Act
        cy.get('[data-test="product-sort-container"]').select(1)

        //Assert
        
        cy.contains('Name (Z to A)').should('be.visible')

        cy.screenshot('Ordem selecionada')


        })  

        it('Filtrar preços baixos', () => {

        // Arrange
        cy.visit('https://www.saucedemo.com/')
      
        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        //Act
        cy.get('[data-test="product-sort-container"]').select(2)

        //Assert
        
        cy.contains('Price (low to high)').should('be.visible')

        cy.screenshot('Filtrando preços baixos para altos')


        })  

        
it('Filtrar preços altos', () => {

    // Arrange
            cy.visit('https://www.saucedemo.com/')
        
            cy.get('[data-test="username"]').type('standard_user')
            cy.get('[data-test=password]').type('secret_sauce')
            cy.get('[data-test="login-button"]').click()
           
            //Act
           
            cy.get('[data-test="product-sort-container"]').select(3)
           
            //Assert
            
            cy.contains('Price (high to low)').should('be.visible')
            cy.screenshot('Filtrando preços altos para baixos')

            })  

        

    })
