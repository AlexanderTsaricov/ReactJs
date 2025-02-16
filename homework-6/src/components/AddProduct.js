import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/productsActions";

function AddProduct() {
    const [product, setProduct] = useState({ id: "", name: "", discription: "", availability: false, price: 0 });
    const dispatch = useDispatch();
    const formRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();

        if (!formRef.current) {
            console.error("Форма не найдена!");
            return;
        }

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());
        const newProduct = {
            id: Date.now(),
            name: data.name,
            discription: data.discription,
            availability: data.availability,
            price: data.price,
        };
        dispatch(addProduct(newProduct));
    };

    return (
        <form className="addProductBox" onSubmit={submit} ref={formRef}>
            <input type="text" placeholder="Product name" className="addProductBox_input" name="name" />
            <input
                type="text"
                placeholder="Product discription"
                className="addProductBox_inputBig"
                name="discription"
            />
            <div className="addProductBox_radioButtonBox">
                <label className="addProductBox_radioLabel">
                    Product is in stock
                    <input type="radio" name="availability" value={true} className="addProductBox_radioButton" />
                </label>
                <label className="addProductBox_radioLabel">
                    Product is out of stock
                    <input type="radio" name="availability" value={false} className="addProductBox_radioButton" />
                </label>
            </div>
            <input type="number" name="price" step={100} className="addProductBox_input" />
            <button className="addProductBox_button" type="submit">
                Submit
            </button>
        </form>
    );
}

export default AddProduct;
