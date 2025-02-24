import {
    ADD_PRODUCT,
    DELETE_PRODUCT_FROM_CART,
    SET_QUALITY_PRODUCT,
    SET_FILTER_SETTING,
} from "./actions/productActions";

const initialState = {
    cart: [],
};

const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            console.log(`Added product with id: ${action.payload.id}`);
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
        }
        case DELETE_PRODUCT_FROM_CART: {
            console.log(`Deleted product from cart with id: ${action.payload.id}`);
            const id = action.payload.id;
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== id),
            };
        }
        case SET_QUALITY_PRODUCT: {
            console.log(`Set quality product with id ${action.payload.product.id} - ${action.payload.quality}`);
            const id = action.payload.product.id;
            const count = action.payload.quality;
            return {
                ...state,
                cart: state.cart.map((product) => (product.id == id ? { ...product, count: count } : product)),
            };
        }
        default:
            return state;
    }
};

export default brandReducer;
