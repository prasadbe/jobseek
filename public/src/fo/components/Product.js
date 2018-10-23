import React from 'react';
import * as actions from './../actions'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { injectIntl, intlShape, FormattedRelative } from 'react-intl'
import curryRight from 'lodash/curryright'


class Product extends React.Component{

   constructor(props) {
       super(props);
       console.log(props);
   }

   componentDidMount() {
     this.props.listProducts();
   }

   addCart(val) {

        this.props.addItem(document.getElementsByName('selectbox_'+val.productId)[0].value, val);

    
   }

   render() {
       return (<div className="wrapper-list productWrapper">
                  {this.props.products.list.map((val) => {
                        return <div className="wrapper"  key={val.productId}><nav className="tabs">
                                <a href="javascript:void(0);">{val.name}</a>
                                <a href="javascript:void(0);">USD $ {val.price}</a>
                                <a href="javascript:void(0);"><select ref={'selectbox_'+val.productId} name={'selectbox_'+val.productId} defaultValue="1">
                                        <option value="0"> 0 </option>
                                        <option value="1"> 1 </option>
                                        <option value="2"> 2 </option>
                                        <option value="3"> 3 </option>
                                        <option value="4"> 4 </option>
                                        <option value="5"> 5 </option>
                                        <option value="6"> 6 </option>
                                        <option value="7"> 7 </option>
                                        <option value="8"> 8 </option>
                                        <option value="9"> 9 </option>
                                    </select></a>
                                    <a className="active" style={{cursor:'pointer'}} onClick={() => {
                                            this.addCart(val)
                                        }}
                                    >Add To Cart</a>
                                </nav>
                                </div>
                  })
                }</div>);
   } 
    

}

const injectIntlDecorator = curryRight(injectIntl)

const mapStateToProps = state => {
  return {
    products: state.products

  }
}

export default compose(injectIntlDecorator(),
  connect(
    mapStateToProps,
    actions
  )
)(Product);