
import {
  LIST_OFFER
} from '../actionTypes'

const INITIAL_STATE = {
  
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LIST_OFFER:
      return Object.assign({}, state, {list: action.offers})

    default:
      return state
  }
}
