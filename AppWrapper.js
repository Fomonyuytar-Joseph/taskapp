/* eslint-disable */
import React from 'react'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

const AppWrapper =() =>{

   return(
    <Provider store={store}>
      <App/>
    </Provider>
   )

}

export default AppWrapper