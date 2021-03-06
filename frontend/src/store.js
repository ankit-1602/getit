import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productUpdateReducer,
    productCreateReducer,
    productReviewCreateReducer,
    productTopRatedReducer
} from './reducers/productReducers.js'
import {cartReducer} from './reducers/cartReducer';
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListReducer,
    orderDeliverReducer
} from './reducers/orderReducers'
import { 
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer
} from './reducers/userReducer'

const reducer=combineReducers({
    productList: productListReducer,
    cart:cartReducer,
    productDetails:productDetailsReducer,
    productDelete:productDeleteReducer,
    productUpdate:productUpdateReducer,
    productCreate:productCreateReducer,
    productReviewCreate:productReviewCreateReducer,
    productTopRated:productTopRatedReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userList: userListReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer,
    orderList:orderListReducer,
    orderDeliver:orderDeliverReducer
})

const cartItemFromStorage=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] ;
const userInfoFromStorage=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState={
    cart: {
        cartItems:cartItemFromStorage,
        shippingAddress: shippingAddressFromStorage
    },
    userLogin:{
        userInfo:userInfoFromStorage
    }

}
const middleware=[thunk]

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;