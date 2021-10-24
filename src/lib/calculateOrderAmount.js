export const calculateOrderAmount = (cartProducts) => {
    let total = 0
    cartProducts.map(product => {
        const calc = product.price * product.quantity
        total += calc
    })
    return total
}