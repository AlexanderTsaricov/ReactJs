export const ADD_PRODUCT = "ADD_PRODCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CHANGE_PRODUCT = "CHANGE_PRODUCT";

export const addProduct = ({ name, discription, price, availability }) => ({
    type: ADD_PRODUCT,
    name: name,
    discription: discription,
    price: price,
    availability: availability,
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id,
});

export const changeProduct = ({ id, name, discription, price, availability }) => ({
    id: id,
    type: CHANGE_PRODUCT,
    name: name,
    discription: discription,
    price: price,
    availability: availability,
});
