import Login from "../pages/logins"
import Inventory from "../pages/inventory"
import Card from "../pages/cart"


describe ('Remover do carrinho', () => {

    it('Remover produto do carrinho de compra', () => {

         // Arrange
        Login.visitarPagina()
      
        Login.preencherCredenciaisUser2()

        cy.screenshot('Logando com  usuário no sistema')

        Inventory.adicionarProduto('Sauce Labs Onesie')

        

        Inventory.clicarCarrinho()


        //Act

        Card.clicarItemCarrinho()
        
        
        Card.removerItemCarrinho('Sauce Labs Onesie')
        

        //Assert
        Card.itemRemovido()
        
        
    
    })

})