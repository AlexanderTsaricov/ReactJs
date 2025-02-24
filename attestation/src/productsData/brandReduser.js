import { ADD_PRODUCT } from "./actions/productActions";

const initialState = {
    cart: [],
};

const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const id = action.payload.id;
            const isHaveProduct = state.cart.some((product) => product.id === id);
            if (isHaveProduct) {
                return {
                    ...state,
                    cart: state.cart.map((product) =>
                        product.id === id ? { ...product, count: product.count + 1 } : product
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { count: 1, ...action.payload }],
                };
            }
        default:
            return state;
    }
};

export default brandReducer;
