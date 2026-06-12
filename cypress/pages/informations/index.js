import { elements as el } from "./elements"

class Information {

    validarSuasInformacoes(){
        cy.get(el.titleInformation)
        .should('be.visible')
        .and('have.text', 'Checkout: Your Information')
    }

    informarNome(){
         cy.get(el.firstName).type('Carla')
    }

    informarSobrenome(){
        cy.get(el.lastName).type('Luiza')
    }

    informarCEP(){
        cy.get(el.postalCode).type('20398-581')

        cy.screenshot('Preenchendo dados pessoais para continuar com a compra')
    }

    continuarInformacoes(){
        cy.get(el.continueInfo).click()
    }

    validarVisaoGeral(){
        cy.get(el.titleOverview).should('be.visible')
        .and('have.text','Checkout: Overview')

        cy.screenshot('Finalizando a compra com as informações gerais')
    }

    clicarFinalizarCompra(){
         cy.get(el.finishPayment).click()
    }

    pedidoRealizado(){
        cy.get(el.orderComplete).should('be.visible').
        and('have.text','Thank you for your order!')

        cy.screenshot('Compra Finalizada com sucesso!')
    }

}

export default new Information()