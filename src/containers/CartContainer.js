import React, { Component } from 'react';
import * as Message from './../constants/Message';
import { connect } from 'react-redux';
import Cart from './../component/Cart';
import CartItem from './../component/CartItem';
import CartResult from './../component/CartResult';
import { actRemoveProduct, actUpdateProduct } from './../action/index';
import { actChangeMessage } from './../action/index';
class CartContainer extends Component {
    showCartItem(cart) {
        let result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        let { onDeleteProduct, onChangeMessage, onUpdateQuatityInCart } = this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (<CartItem
                    key={index}
                    item={item}
                    index={index}
                    onDeleteProduct={onDeleteProduct}
                    onChangeMessage={onChangeMessage}
                    onUpdateQuatityInCart={onUpdateQuatityInCart} />);
            })
        }
        return result;
    }
    showTotalAmount(cart) {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct: (product) => {
            dispatch(actRemoveProduct(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateQuatityInCart: (product, quantity) => {
            dispatch(actUpdateProduct(product, quantity));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
