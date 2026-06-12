
export const elements = {
    addToCart: (itemName) => `[data-test="add-to-cart-${transform(itemName)}`,
    cartShopping: '[data-test="shopping-cart-badge"]'
    }

    function transform(texto) {
        return texto.replaceAll(' ','-').toLowerCase()
    }

    
