import {combineReducers} from 'redux'
import CartShop from './CartShop'
const rootReducer = combineReducers({
    cart: CartShop
})

export default rootReducer;
