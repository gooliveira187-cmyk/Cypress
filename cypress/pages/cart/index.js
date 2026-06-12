import { elements as el } from "./elements"

class Card {

    clicarItemCarrinho(){
        cy.get(el.cartBadge).click()

        cy.contains('Description').should('be.visible')
    }

    removerItemCarrinho(itemName){
        cy.get(el.removeToCart(itemName)).click()
    }

    itemRemovido(){
        cy.get(el.cartBadge).should('not.exist')

        cy.screenshot('Produto Removido')
    }

    validarProdutoNoCarrinho(){
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible')
    }

    checarProduto(){
         cy.get(el.checkProduct).click()
    }


}

export default new Card()