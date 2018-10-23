
import {
  LIST_PRODUCT
} from '../actionTypes'

const INITIAL_STATE = {
    list: [

    ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LIST_PRODUCT:
      return Object.assign({}, state, {
        list : action.products
      })

    default:
      return state
  }
}
