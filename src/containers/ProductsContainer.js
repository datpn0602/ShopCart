import React, { Component } from 'react';
import Product from './../component/Product';
import { connect } from 'react-redux';
import Products from './../component/Products';
import { actAddToCart } from './../action/index';
import { actChangeMessage } from './../action/index';
class ProductsContainer extends Component {

    showProducts(products) {
        let result = null;
        let { onAddToCart, onChangeMessage } = this.props;
        result = products.map((product, index) => {
            return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
        });
        return result;
    }
    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
