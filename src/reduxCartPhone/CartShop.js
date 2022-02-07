const stateCart = {
    cart: [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "soLuong": 1, "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }
    ]
}

const CartShop = (state = stateCart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            {
                let index = state.cart.findIndex(p => p.maSP === action.carts.maSP)
                if (index !== -1) {
                    state.cart[index].soLuong += 1
                } else {
                    state.cart.push(action.carts)
                }
                state.cart = [...state.cart]
                return {...state }
            }
            break;
        case 'DELETE_CART':
            {
                let cartNew = [...state.cart]
                let index = cartNew.findIndex(p => p.maSP === action.carDelete)
                if (index !== -1) {
                    cartNew.splice(index, 1)
                }
                state.cart = cartNew
                return {...state }
            }
            break;
        case 'INCREASE_Decrease':
            {
                let cartNew = [...state.cart]
                let index = cartNew.findIndex(p => p.maSP === action.maSPs)
                if (index !== -1) {
                    if (action.bool) {
                        cartNew[index].soLuong += 1
                    } else {
                        if (cartNew[index].soLuong > 1) {
                            cartNew[index].soLuong -= 1
                        } else {
                            alert('please many more one!')
                        }
                    }
                }
                state.cart = cartNew
                return {...state }
            }
        default:
            {
                return {...state }
            }
    }
    return state
}
export default CartShop