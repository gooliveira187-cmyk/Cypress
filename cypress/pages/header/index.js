import { elements as el } from "./elements"

class Header {

        clicarBarraTodosItens() {
            cy.get(el.burgerButton).click()
        }
    
        validarMenuTodosItens() {
            cy.get(el.menuAllItens).should('be.visible')
            .and('have.text','Logout')
    
            cy.screenshot('Clicando em logout para sair da Homepage')
        }
    
        clicarBotaoLogout() {
            cy.get(el.logoutButton).click()
    
            cy.contains('Accepted usernames are:').should('be.visible')
    
            cy.screenshot('Logout realizado com sucesso')
    
        }

        selecionarFiltroInventario1() {
        cy.get(el.selectFilter).select(1)
        }

        selecionarFiltroInventario2() {
        cy.get(el.selectFilter).select(2)
         }

        selecionarFiltroInventario3() {
        cy.get(el.selectFilter).select(3)
         }

        validaOrdemInvertida() {
        cy.contains('Name (Z to A)').should('be.visible')
        
        cy.screenshot('Ordem selecionada')
        }

        validarpPrecosBaixos() {
        cy.contains('Price (low to high)').should('be.visible')

        cy.screenshot('Filtrando preços baixos para altos')
        }

        validarpPrecosAltos() {
        cy.contains('Price (high to low)').should('be.visible')

        cy.screenshot('Filtrando preços altos para baixos')
         }

         validarQueCarrinhoTemItens(quantidade){
            cy.get(el.cartBadge)
            .should('be.visible')
            .and('have.text', quantidade.toString())

            cy.screenshot('Produto Adicionado')
         }

         navegarParaCarrinho(){
            cy.get(el.cartContainer).click()
         }


    }

export default new Header() 