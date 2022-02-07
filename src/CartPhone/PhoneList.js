import React, { Component } from 'react'
import PhoneItem from './PhoneItem'

export default class PhoneList extends Component {

    renderData = () => {
        return this.props.data.map((current, index) => {
            return (
                <div className="col-4" key={index}>
                    <PhoneItem addToCart={this.props.addToCart} current={current}/>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    {this.renderData()}
                </div>
            </div>
        )
    }
}
