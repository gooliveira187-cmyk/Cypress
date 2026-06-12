import { elements as el } from "./elements"

class Inventory {

    validarAcessoUser1() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

        cy.screenshot('Logado com primeiro usuário')   

    }

    validarAcessoUser2() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

        cy.screenshot('Logado com segundo usuário')   

    }

    validarAcessoUser3() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

        cy.screenshot('Logado com terceiro usuário')   

    }
     
    adicionarProduto(itemName){
        cy.get(el.addToCart(itemName)).click()

        cy.screenshot('Produto Adicionado')
    }


    clicarCarrinho(){
        cy.get(el.cartShopping).click()
    }



}

export default new Inventory()