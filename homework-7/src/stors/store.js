import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Используем localStorage
import tasksReducer from "../reducers/taskReducer";
import loadingReducer from "../data/fetchTasks";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, tasksReducer);

export const store = configureStore({
    reducer: {
        tasks: persistedReducer,
        loadingReducer: loadingReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
