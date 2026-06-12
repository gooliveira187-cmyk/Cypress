import { elements as el } from "./elements"

class Login {

    visitarPagina() {
        cy.visit('https://www.saucedemo.com/')
    }

    preencherCredenciaisUser1() {
        cy.get(el.username).type('standard_user')

        cy.get(el.password).type('secret_sauce')

        cy.get(el.loginButton).click()

    }

    preencherCredenciaisUser2() {

        cy.get(el.username).type('performance_glitch_user')

        cy.get(el.password).type('secret_sauce')

        cy.get(el.loginButton).click()

    }

    preencherCredenciaisUser3() {
        cy.get(el.username).type('visual_user')

        cy.get(el.password).type('secret_sauce')

        cy.get(el.loginButton).click()

    }


    validarErroCredenciaisInvalidas() {
        cy.get(el.username).type('invalid_useer')

        cy.get(el.password).type('error1')

        cy.get(el.loginButton).click()
       
        cy.get(el.errorMessage)
        .should(
            'contain.text',
            'Username and password do not match any user in this service'
        )

        cy.url().should('eq','https://www.saucedemo.com/')

        cy.screenshot('erro credenciais invalidas')
    }




}

export default new Login()