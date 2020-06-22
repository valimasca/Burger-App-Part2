import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

//synchrounous
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};


//synchrounous
export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
};

//asynchrounous
export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.post( '/orders.json', orderData )
            .then( response => {
                dispatch(purchaseBurgerSuccess(response.data, orderData));
            } )
            .catch( error => {
                dispatch( purchaseBurgerFail(error));
            } );
    }
}