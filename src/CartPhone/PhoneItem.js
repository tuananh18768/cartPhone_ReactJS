import React, { Component } from 'react'

export default class PhoneItem extends Component {
    render() {
        let {current} = this.props
        return (
            <div>
                <div className="card" style={{ width: '100%' }}>
                        <img style={{width: '100%', height: '350px'}}src={current.hinhAnh} className="card-img-top" alt="index" />
                        <div className="card-body">
                            <h5 className="card-title">{current.tenSP}</h5>
                            <p className="card-text">{current.giaBan.toLocaleString()}</p>
                            <button onClick={()=>{this.props.addToCart(current)}} className="btn btn-primary">Add Cart</button>
                        </div>
                    </div>
            </div>
        )
    }
}
