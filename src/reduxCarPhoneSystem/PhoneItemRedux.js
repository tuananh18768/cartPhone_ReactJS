import React, { Component } from 'react'
import {connect} from 'react-redux'
 class PhoneItemRedux extends Component {
    render() {
        let {current} = this.props
        return (
            <div>
                <div className="card" style={{ width: '100%' }}>
                        <img style={{width: '100%', height: '350px'}}src={current.hinhAnh} className="card-img-top" alt="index" />
                        <div className="card-body">
                            <h5 className="card-title">{current.tenSP}</h5>
                            <p className="card-text">{current.giaBan.toLocaleString()}</p>
                            <button onClick={()=>{this.props.addCart(current)}} className="btn btn-primary">Add Cart</button>
                        </div>
                    </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addCart: (newCarts)=>{
            let carts = { 
                maSP: newCarts.maSP,
                tenSP: newCarts.tenSP,
                hinhAnh: newCarts.hinhAnh, 
                soLuong: 1, 
                giaBan: newCarts.giaBan, 
            }
            let actions = {
                type: 'ADD_TO_CART',
                carts
            }
            dispatch(actions)
        }
    }
}
export default connect(null, mapDispatchToProps)(PhoneItemRedux)