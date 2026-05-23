// {as el} -> apelidandoo objeto
import { elements as el } from "./elements";
//dentro do arquivo elements, tem um objeto
//chamado elements




class login {

    visitarPagina () {
        cy.visit('https://www.saucedemo.com/')
    }


//definição da classe

    preencherCredenciaisValidas() {

    cy.get(el.username).type('standard_user')

    cy.get(el.password).type('secret_sauce')

    cy.get(el.loginButton).click()

    }

    preencherCredenciaisInvalidas() {

    cy.get(el.username).type('user.invalid')

    cy.get(el.password).type('senha')

    cy.get(el.loginButton).click()

    }

    validarErroCredenciaisInvalidas() {


        cy.get(el.errorMessage)
        .should(
            'contain.text', 
            'Username and password do not match any user in this service'
        )

        cy.url().should('eq', 'https://www.saucedemo.com/')

        cy.screenshot('Erro credenciais invalidas')
        
    }
}



export default new login () 
//exportando uma nova instancia da classe

