
import {
  LIST_CUSTOMER,
  SET_CUSTOMER
} from '../actionTypes'
import {getCookie, setCookie} from '../utils';
import cart from '../lib/cart';

const INITIAL_STATE = {
    list: [
        
    ],
    defaultCustomer : (getCookie('customerId') != '') ? getCookie('customerId') : 1
}

cart.addCustomer(INITIAL_STATE.defaultCustomer);

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case SET_CUSTOMER: 
      return Object.assign({}, state, {
        defaultCustomer : action.customerId ,
        
      })
    case LIST_CUSTOMER:
      return Object.assign({}, state, {
        list: action.customers
      })

    default:
      return state
  }
}
