import login from "../pages/login"
import inventory from "../pages/inventory";
 

describe('Login', () => {

  beforeEach(() => {

    login.visitarPagina();
    //dentro da classe login tem o método 
    // de visitar pagina (primeira refatoração)

  })

    it('Realizar login com sucesso', () => {
      
      //Act
      login.preencherCredenciaisValidas()

      inventory.validarAcessoAPagina()
        
    })

    it('Realizar login informando credenciais inválidas', () => {
      
      //Act
        
      login.preencherCredenciaisInvalidas()

      login.validarErroCredenciaisInvalidas()
        

    })
})

