import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productsReducer";

const store = configureStore({
    reducer: {
        products: productReducer,
    },
});

export default store;
