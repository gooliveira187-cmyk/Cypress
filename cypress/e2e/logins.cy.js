import Login from '../pages/logins'
import inventory from '../pages/inventory'


describe ('Login', () => {

beforeEach(() => {
    Login.visitarPagina()
})

it ('Logar com primeiro usuário com sucesso', () => {
    
      Login.preencherCredenciaisUser1()

      //Assert
      inventory.validarAcessoUser1()
        
    })

    it ('Logar com segundo usuário com sucesso', () => {

      Login.preencherCredenciaisUser2()

      //Assert

      inventory.validarAcessoUser2
    })

    it ('Logar com terceiro usuário com sucesso', () => {
      
      Login.preencherCredenciaisUser3()

      //Assert

        inventory.validarAcessoUser3()
    })


    it ('Tentativa de Login errado', () => {

        Login.validarErroCredenciaisInvalidas()

    })  


}) 