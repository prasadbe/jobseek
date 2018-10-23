import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import customer from './customer';
import cart from './cart';
import product from './product';
import { intlReducer } from 'react-intl-redux'
const appReducer = combineReducers({
  customer: customer,
  cart: cart,
  products: product,
  formReducer: formReducer,
  routing: routerReducer,
  intl: intlReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;