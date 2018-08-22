//import  * as types from './constants/ActionTypes';

let initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/93709/iphone-7-plus-red-128gb-400x460.png',
        price: 300,
        rating: 1,
        description: 'Sản phẩm của Apple'
    },
    {
        id: 2,
        name: 'Samsung galaxy S8',
        image: 'https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-400x460-400x460.png',
        price: 250,
        rating: 2,
        description: 'Sản phẩm của Samsung'
    },
    {
        id: 3,
        name: 'Oppo F7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/155261/oppo-f7-bac-400x460.png',
        price: 100,
        rating: 2,
        description: 'Sản phẩm của Oppo'
    }
];
const products = (state = initialState, action) => {
    switch (action.type) {

        default:
            return [...state];
    }
}
export default products;
