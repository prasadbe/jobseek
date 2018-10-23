import React from 'react';
import Header from './Header';
import * as actions from './actions'
import { compose } from 'redux'



class NotFound extends React.Component {

   render() {
       return <div className="container"><Header /></div>
   } 
    

}


const mapStateToProps = state => {
  return {
    userDetail: state.auth.userDetail || null,
    errorMessage: state.errors
  }
}


export default compose(injectIntlDecorator(),
  connect(
    mapStateToProps,
    actions
  )
)(NotFound)
