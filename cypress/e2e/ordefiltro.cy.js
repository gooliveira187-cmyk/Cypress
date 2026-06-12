import Login from '../pages/logins'
import Header from '../pages/header'

describe ('Ordenar e filtrar produto', () => {

    it('Ordenar de Z-A', () => {
        
        // Arrange
        Login.visitarPagina()
              
        Login.preencherCredenciaisUser1()
        
        //Act
        Header.selecionarFiltroInventario1()
        
        //Assert
        
        Header.validaOrdemInvertida()
        
        
        
    })  

        it('Filtrar preços baixos', () => {

        
        // Arrange
        Login.visitarPagina()
              
        Login.preencherCredenciaisUser2()
        
        //Act
        Header.selecionarFiltroInventario2()

        //Assert
        
        Header.validarpPrecosBaixos()


        })  

        
        it('Filtrar preços altos', () => {

            // Arrange
            Login.visitarPagina()
                
            Login.preencherCredenciaisUser1()
            
            //Act
            Header.selecionarFiltroInventario3()
           
            //Assert
            
            Header.validarpPrecosAltos()

            })  

        

    })
