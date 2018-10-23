import { Promise } from 'es6-promise'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, intlReducer } from 'react-intl-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
import routes from '../routes'
import { createBrowserHistory } from 'history';


//ES6 Promise polyfill for IE 11
if (!window.Promise) {
  window.Promise = Promise
}


const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

const initialState = {
  intl: {
    defaultLocale: 'en_US',
    locale: 'en',
    messages: {}
  },

}

console.log(initialState)
const store = createStoreWithMiddleware(reducers, initialState,
  // Enable redux dev tools
  window.devToolsExtension && window.devToolsExtension()
)


// Create an enhanced history that syncs navigation events with the store.
// Create an enhanced history that syncs navigation events with the store.
const history = syncHistoryWithStore(createBrowserHistory(), store, {
  selectLocationState(state) {
    return state.routing
  }
})





export default () => {
  return (
    <Provider store={store}>
      <Router  history={history}>
        {routes}
      </Router>
    </Provider>
  )
}
