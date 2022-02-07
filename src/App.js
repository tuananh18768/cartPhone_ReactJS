import React, { Component } from 'react'
import PhoneCartSystem from './CartPhone/PhoneCartSystem'
import CartPhoneSystemRedux from './reduxCarPhoneSystem/CartPhoneSystemRedux'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <PhoneCartSystem /> */}
        <CartPhoneSystemRedux />
      </div>
    )
  }
}
