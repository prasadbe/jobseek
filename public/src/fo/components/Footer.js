import React from 'react';
import * as actions from './../actions'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { injectIntl, intlShape, FormattedRelative } from 'react-intl'
import curryRight from 'lodash/curryright'


class Footer extends React.Component{

   constructor(props) {
       super(props);
   }

   render() {
       return (<div className="footer" style={{textAlign:'center'}}>@copyright alphatest JobSeek</div>);
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
)(Footer);