const constants = require('../constants')

export function receiveProduct(product) {
  console.log("PRODUCT",product)
  return {
    type: constants.RECEIVE_PRODUCT,
    product
  }
}
