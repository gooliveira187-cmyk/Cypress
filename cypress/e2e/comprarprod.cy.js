import Login from "../pages/logins"
import Inventory from "../pages/inventory"
import Header from "../pages/header"
import Card from "../pages/cart"
import Information from "../pages/informations"

describe ('Comprar produto', () => {

    it('Adicionar produto ao carrinho e efetuar compra', () => {

        // Arrange
        Login.visitarPagina()
        Login.preencherCredenciaisUser1()

         cy.screenshot('Logando com  usuário no sistema')

        const qtdItensAdicionados = 1
        Inventory.adicionarProduto('Sauce Labs Fleece Jacket')

        Header.validarQueCarrinhoTemItens(qtdItensAdicionados)

        

        

        Header.navegarParaCarrinho()

        Card.validarProdutoNoCarrinho()
        
        

        //Act 
        Card.checarProduto()

        Information.validarSuasInformacoes()

        Information.informarNome()

        Information.informarSobrenome()

        Information.informarCEP()

        

        Information.continuarInformacoes()

        Information.validarVisaoGeral()

        

        Information.clicarFinalizarCompra()
        //Assert

        Information.pedidoRealizado()

        

    })

})