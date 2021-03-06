import React, { Component } from 'react'
import {connect} from 'react-redux'
class ModalRedux extends Component {
    
    sumMoney = ()=>{
        return this.props.cart.reduce((total, current, index)=>{
            return total += current.soLuong * current.giaBan
        }, 0).toLocaleString()
    }
    renderCart = ()=>{
        return this.props.cart.map((current, index)=>{
            return(
                <tr key={index}>
                    <th scope="row">{current.maSP}</th>
                    <td><img style={{width: '70px', height: '70px'}} src={current.hinhAnh} alt="index" /></td>
                    <td>{current.tenSP}</td>
                    <td>
                        <button style={{width: '24px', padding: '2px', marginRight: '5px'}} className="btn btn-primary"   onClick={()=>{this.props.increaseDecrease(current.maSP, true)}}>+</button>
                            {current.soLuong}
                        <button style={{width: '24px', padding: '2px', marginLeft: '5px'}} className="btn btn-primary"    onClick={()=>{this.props.increaseDecrease(current.maSP, false)}}>-</button>
                    </td>
                    <td>{current.giaBan}</td>
                    <td>{(current.soLuong * current.giaBan).toLocaleString()}</td>
                    <td><button onClick={()=>{this.props.deleteCart(current.maSP)}} className="btn btn-danger">Delete</button></td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <div>
                   
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div style={{minWidth: '1000px'}} className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">??</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Ma SP</th>
                                                <th scope="col">Hinh Anh</th>
                                                <th scope="col">Ten SP</th>
                                                <th scope="col">So Luong</th>
                                                <th scope="col">Don gia</th>
                                                <th scope="col">Thanh tien</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderCart()}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="5"></td>
                                                <td>Tong tien</td>
                                                <td>{this.sumMoney()}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        cart: state.cart.cart
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        deleteCart: (carDelete)=>{
            let action ={
                type: 'DELETE_CART',
                carDelete
            }
            dispatch(action)
        },
        increaseDecrease: (maSPs, bool)=>{
            let action ={
                type: 'INCREASE_Decrease',
                maSPs,
                bool
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalRedux)
