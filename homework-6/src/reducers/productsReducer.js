import { ADD_PRODUCT, DELETE_PRODUCT, CHANGE_PRODUCT } from "../actions/productsActions";

const initialState = [];

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                {
                    id: Date.now(),
                    name: action.name,
                    discription: action.discription,
                    price: action.price,
                    availability: action.availability === "true",
                },
            ];
        case DELETE_PRODUCT:
            return state.filter((product) => product.id !== action.payload);
        case CHANGE_PRODUCT:
            return state.map((product) => {
                console.log(action.availability);
                if (action.id === product.id) {
                    return {
                        id: action.id,
                        name: action.name,
                        discription: action.discription,
                        price: action.price,
                        availability: action.availability === "true",
                    };
                } else {
                    return product;
                }
            });
        default:
            return state;
    }
};

export default productReducer;
