import * as types from './../constants/ActionTypes';

export const actAddToCart = (product, quantity) => {
    return {
      type : types.ADD_TO_CART,
      product,
      quantity
    };
}
export const actChangeMessage = (message) => {
    return {
      type : types.CHANGE_MESSGE,
      message
    };
}
export const actRemoveProduct = (product) => {
    return {
      type: types.DELETE_PRODUCT,
      product
    }
}
export const actUpdateProduct = (product, quantity) => {
    return {
      type: types.UPDATE_PRODUCT,
      product,
      quantity
    }
}
