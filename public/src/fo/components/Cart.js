import React from 'react';
import * as actions from './../actions'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { injectIntl, intlShape, FormattedRelative } from 'react-intl'
import curryRight from 'lodash/curryright'
import {setCookie} from './../utils'

class Cart extends React.Component{

   constructor(props) {
       super(props);
   }



   render() {
     
      var price = 0, total = 0, discount = 0;

      this.props.cart.list.map((val) => {
        price += val.price;
        discount += val.discount;
        total += parseFloat(val.price - val.discount);
      });
      
     
       return (<div className="wrapper cartwrapper">
                {(this.props.cart.list.length > 0) ?
                <div>
                <h2>Job Seek Cart</h2>

                <nav className="tabs">
                  <div className="selector"></div>
                  <a href="javascript:void(0);">Name</a>
                  <a href="javascript:void(0);">Purchased Qty</a>
                  <a href="javascript:void(0);">Free Qty</a>
                  <a href="javascript:void(0);">Price</a>
                  <a href="javascript:void(0);">Discount</a>
                  <a href="javascript:void(0);">Total</a>
                </nav>

                
                  {this.props.cart.list.map((val) => {

                        return <nav className="tabs" key={val.id}>
                                <div className="selector"></div>
                                <a href="javascript:void(0);">{val.name}</a>
                                <a href="javascript:void(0);">{val.qty}</a>
                                <a href="javascript:void(0);">{val.f_qty}</a>
                                <a href="javascript:void(0);">$ {val.price}</a>
                                <a href="javascript:void(0);">$ {val.discount}</a>
                                <a href="javascript:void(0);">$ {parseFloat(val.price - val.discount).toFixed(2)}</a>
                               </nav>
                   } )}

                   <div> Price : {price}</div>
                   <div> Discount : {discount}</div>
                   <div> Totak : {parseFloat(total).toFixed(2)}</div>
              </div> :  <div>
                <h2>Empty Cart</h2> </div>}
              </div>);
   } 
    

}

const injectIntlDecorator = curryRight(injectIntl)

const mapStateToProps = state => {
  return {
    cart: state.cart

  }
}

export default compose(injectIntlDecorator(),
  connect(
    mapStateToProps,
    actions
  )
)(Cart);