import * as constants from '../constants'
import * as actions from './'
import fetch from 'isomorphic-fetch'

export function fetchProductData(url,productId) {
  return (dispatch, getState) => {
    fetch(url +  `/api/product?productId=${productId}`)
      .then( res => {
        if (res.status >= 400) { throw new Error("Error in response from server") }
        return res.json()
      })
      .then( res => {
        dispatch(actions.receiveProduct(res))
      })
  }
}
