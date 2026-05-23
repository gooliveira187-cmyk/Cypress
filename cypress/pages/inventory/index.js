import {elements as el} from "../inventory/elements"

class inventory {

    validarAcessoAPagina () {

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

        cy.screenshot('Acesso a página do inventário')
    }

    adicionarProduto(itemName) {

        cy.get(el.addToCart(itemName)).click()


    }

    removerProduto(itemName){
        cy.get(el.removeFromCart(itemName)).click()
    }

}

export default new inventory ()