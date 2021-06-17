import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        {name: 'Lenove', id: 1},
        {name: 'Afsus', id: 2},
        {name: 'Bell', id: 3},
        {name: 'HP', id: 4},
        {name: 'Toshiba', id: 5}
    ]
    
}

const cartReducers = (state = initialState, action) => {
    switch(action.type) {

        case ADD_TO_CART: 
            const newItem = {productId: action.id, name: action.name, cartId: state.cart.length + 1}
            const newCart = [...state.cart, newItem];

            return {...state, cart: newCart}
        
        //Alternative way
        // return {
        //     cart: [...state.cart, action.id]
        // }

        case REMOVE_FROM_CART:
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);
            return {...state, cart: remainingCart}
        default:
            return state;
    }
}

export default cartReducers;