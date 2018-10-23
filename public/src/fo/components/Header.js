import React from 'react';
import * as actions from './../actions'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { injectIntl, intlShape, FormattedRelative } from 'react-intl'
import curryRight from 'lodash/curryright'
import {setCookie} from './../utils'

class Header extends React.Component{

   constructor(props) {
       super(props);
   }

   componentDidMount() {
     this.props.listCustomers();
   }

   setCustomer(id) {
     setCookie('customerId', id, 1)
     this.props.setCustomers(id);
   }

   render() {
     
     
       return (<div className="wrapper headWrapper">
                <h2>Job Seek</h2>
                
                <nav className="tabs">
                  <div className="selector"></div>
                  {this.props.customer.list.map((val) => {
                        return <a href="javascript:void(0);" 
                        className={(val.customerId == this.props.customer.defaultCustomer) ? 'active' : ''}   key={val.customerId}   onClick={() => {
                              this.setCustomer(val.customerId)
                          }}>{val.name}</a>
                  })}
                </nav>
              </div>);
   } 
    

}

const injectIntlDecorator = curryRight(injectIntl)

const mapStateToProps = state => {
  return {
    customer: state.customer

  }
}

export default compose(injectIntlDecorator(),
  connect(
    mapStateToProps,
    actions
  )
)(Header);