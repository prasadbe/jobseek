import React from 'react'
import ReactDOM from 'react-dom'
import Root from './container/Root'

//Explicitly check  and activate HMR
if (module.hot) {
  console.log(module.hot)
  module.hot.accept()
}

ReactDOM.render(<Root />, document.getElementById('root'))
