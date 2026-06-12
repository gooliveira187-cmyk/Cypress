import Login from "../pages/logins"
import inventory from '../pages/inventory'
import Header from "../pages/header"



describe('Logout', ()=> {
    
    beforeEach( ()=>{
       Login.visitarPagina()
    })
    
    it('Fazendo logout com 1º conta', () => {
        //Arrange

        Login.preencherCredenciaisUser2()

        inventory.validarAcessoUser2()

        
        //Act

        Header.clicarBarraTodosItens()

        Header.validarMenuTodosItens()

        //Assert

        Header.clicarBotaoLogout()


    })


    it('Fazendo logout com 2º conta', () => {

        //Arrange

        Login.preencherCredenciaisUser1()

        inventory.validarAcessoUser1()

        //Act

        Header.clicarBarraTodosItens()

        Header.validarMenuTodosItens()

        //Assert

        Header.clicarBotaoLogout()
    })
})