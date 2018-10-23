import {
  LIST_CUSTOMER,
  LIST_PRODUCT,
  LIST_OFFER,
  SET_CUSTOMER,
  LIST_CART,
  ADD_ITEM
} from './actionTypes';

import cart from './lib/cart';

import { browserHistory } from 'react-router'
import axios from 'axios'
export const listCustomers = (data) => {
  return function (dispatch) {
        axios.get('/customers/get')
        .then(function (response) {
           console.log(response);
           dispatch({
             type: LIST_CUSTOMER,
             customers: response.data.customers
           })
        })
        .catch(function (error) {
          console.log(error);
        });
  }
}

export const listProducts = (data) => {
  return function (dispatch) {
        axios.get('/products/get')
        .then(function (response) {
           console.log(response);
           dispatch({
             type: LIST_PRODUCT,
             products: response.data.products
           })
        })
        .catch(function (error) {
          console.log(error);
        });
  }
}

export const addItem = (id, data) => {

  data.qty = id;

  cart.addItem(data);
  
  return function (dispatch) {
      dispatch({
             type: ADD_ITEM,
             list: cart.carts
      })
  }
    
  
}

export const listOffers = (data) => {
  return function (dispatch) {
        axios.get('/offers/get')
        .then(function (response) {
           console.log(response);
           cart.addOffers(response.data.offers);
           dispatch({
             type: LIST_OFFER,
             products: response.data.offers
           })
        })
        .catch(function (error) {
          console.log(error);
        });
  }
}

export const setCustomers = (customerId) => {
  cart.addCustomer(customerId);
  return  (dispatch) => dispatch({
    type: SET_CUSTOMER,
    customerId: customerId,
    carts: cart.carts
  })
}
