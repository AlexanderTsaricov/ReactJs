export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
export const SET_QUALITY_PRODUCT = "SET_QUALITY_PRODUCT";
export const SET_FILTER_SETTING = "SET_FILTER_SETTING";

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product,
});

export const deleteProductFromCart = (product) => ({
    type: DELETE_PRODUCT_FROM_CART,
    payload: product,
});

export const setQualityProduct = (product, quality) => ({
    type: SET_QUALITY_PRODUCT,
    payload: { product: product, quality: quality },
});

export const setFilterSetting = (settings) => ({
    type: SET_FILTER_SETTING,
    payload: settings,
});
