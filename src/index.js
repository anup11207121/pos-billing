import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
// import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

const store=configureStore()
console.log('state',store.getState())
store.subscribe(()=>{
  console.log('state updated',store.getState())
})
console.log(store)

ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>,document.getElementById('root')
)


