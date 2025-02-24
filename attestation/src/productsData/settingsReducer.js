import { SET_FILTER_SETTING } from "./actions/productActions";

const initialState = {
    xs: false,
    s: false,
    m: false,
    l: false,
};

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_SETTING: {
            console.log(
                `Set filter settings: XS: ${action.payload.xs}, S: ${action.payload.s}, M: ${action.payload.m}, L: ${action.payload.l}`
            );
            return action.payload;
        }
        default:
            return state;
    }
};
