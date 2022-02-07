import React, { Component } from 'react'
import Modal from './Modal'
import PhoneList from './PhoneList'
export default class PhoneCartSystem extends Component {
    Phones = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "soLuong":1, "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "soLuong":1, "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB" , "soLuong":1 , "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]
    state = {
        phones:  []
    }
    addToCart = (cart)=>{
        
        let index = this.state.phones.findIndex((p)=> p.maSP === cart.maSP)
        console.log(index)
        if(index !== -1){
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.phones[index].soLuong += 1 
        }
        else{
          this.state.phones.push(cart)
        }
        
        this.setState({
            phones: this.state.phones
        })
    }
    deleteCart = (carts)=>{
       let index =  this.state.phones.findIndex(p => p.maSP ===carts.maSP)
       if(index !== -1){
        this.state.phones.splice(index, 1)
       }
       this.setState({
           phones: this.state.phones
       })
    }
    caculateSum = ()=>{
        return this.state.phones.reduce((sum, current)=>{
            return sum += current.soLuong
        }, 0)
    }
    qualitySum = (cart, number)=>{
        let index = this.state.phones.findIndex(p => p.maSP ===cart.maSP);
        if(index !== -1){
            if(this.state.phones[index].soLuong <= 1 && number === -1){
                alert("Please not below 1 quality!!!")
                return
            }
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.phones[index].soLuong  += number;
        }
        this.setState({
            phones: this.state.phones
        })
    }
    render() {
        return (
            <div>
                <div className="mt-5 mx-5 text-right">
                <i style={{cursor: "pointer"}} className="fa fa-shopping-cart" data-toggle="modal" data-target="#exampleModal"></i> ({this.caculateSum()}) Cart
                </div>
                <Modal qualitySum={this.qualitySum} deleteCart={this.deleteCart} statePhone={this.state.phones} />
                <PhoneList addToCart={this.addToCart} data={this.Phones} />
            </div>
        )
    }
}
