import * as constants from '../constants'

const initialState = {
}

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.RECEIVE_PRODUCT:
      const { product } = action
      return {
        ...state,
        ...product
      }
      break;

    default:
      return state
  }
}
