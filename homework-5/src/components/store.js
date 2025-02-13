import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./redux";

const store = configureStore({
    reducer: {
        theme: profileReducer,
    },
});

export default store;
