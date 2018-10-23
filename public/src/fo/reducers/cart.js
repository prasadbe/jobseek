
import {
  LIST_CART,
  ADD_ITEM,
  SET_CUSTOMER
} from '../actionTypes'

const INITIAL_STATE = {
  list: [],
  discount: 0,
  total: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ADD_ITEM:
      return Object.assign({}, state, {list: action.list})
    
    case SET_CUSTOMER: 
      return Object.assign({}, state, {
        list : action.carts ,
        
      })
    default:
      return state
  }
}
