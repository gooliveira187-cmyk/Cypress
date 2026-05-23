

import login from "../pages/login"
import inventory from "../pages/inventory"
import Header from "../pages/header"
import Cart from "../pages/cart"

describe ('Carrinho', () => {

    beforeEach ( () => {
        login.visitarPagina ()
        login.preencherCredenciaisValidas ()
    })

    it('Adicionar produto ao carrinho com sucesso', () => {

        const qtdItensAdicionados = 1
       
       //Act 
        inventory.adicionarProduto('Sauce Labs Backpack')

         //Assert

         Header.validarQueCarrinhoPossuiItens(qtdItensAdicionados)
        
         Header.navegarParaCarrinho()

         Cart.validarProdutoPresenteNoCarrinho()

        
    })

    it('Remover produto do carrinho com sucesso', () => {

        // Arrange
        inventory.adicionarProduto()


        //Act

        inventory.removerProduto('Sauce Labs Backpack')
        

        //Assert
        Header.validarQueCarrinhoNaoPossuiItens()
        

    })

})