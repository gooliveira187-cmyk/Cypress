export const elements = {
    removeToCart: (itemName) => `#remove-${transform(itemName)}`,
    checkProduct: '[data-test="checkout"]',
    cartBadge: '.shopping_cart_badge'
}

function transform(texto){
  return texto.replaceAll(' ','-').toLowerCase()
}

    