import React, { Component } from 'react'
import CartPhoneListRedux from './CartPhoneListRedux'
import ModalRedux from './ModalRedux'
import {connect} from 'react-redux'

class CartPhoneSystemRedux extends Component {
    
    renderCart = ()=>{
        return this.props.carts.reduce((total,current,index)=>{
            return total += current.soLuong
        }, 0)
    }
    render() {
        return (
            <div>
                <div className="mt-5 mx-5 text-right">
                <i style={{cursor: "pointer"}} className="fa fa-shopping-cart" data-toggle="modal" data-target="#exampleModal"></i> ({this.renderCart()}) Cart
                </div>
                <ModalRedux />
                <CartPhoneListRedux />
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        carts: state.cart.cart
    }
}

export default connect(mapStateToProps)(CartPhoneSystemRedux)
