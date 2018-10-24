import React from 'react';
import * as actions from './../actions';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import Cart from './Cart';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { injectIntl, intlShape, FormattedRelative } from 'react-intl'
import curryRight from 'lodash.curryright'
import './../style/main.less';
class App extends React.Component {

   constructor(props) {
       super(props);
       this.props.listOffers();
   }

   render() {
       return (
            <div className="container">
                 <Header />
                 
                 <Product />
                 <Cart />
                 <Footer />
            </div>
       )
   } 
    

}

const injectIntlDecorator = curryRight(injectIntl)

const mapStateToProps = state => {
  return {
  }
}


export default compose(injectIntlDecorator(),
  connect(
    mapStateToProps,
    actions
  )
)(App)