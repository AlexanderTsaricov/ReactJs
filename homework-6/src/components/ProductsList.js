import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../actions/productsActions";
import { changeProduct } from "../actions/productsActions";

function getTextAvailabilityProduct(availability) {
    if (availability) {
        return "The product is in stock";
    } else {
        return "The product is out of stock";
    }
}

function ProductsList() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [editingProductId, setEditingProductId] = useState(null);
    const formRef = useRef(null);

    const changeProductButton = (e) => {
        e.preventDefault();

        if (!formRef.current) {
            console.error("Форма не найдена!");
            return;
        }

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());
        const newProduct = {
            id: editingProductId,
            name: data.name,
            discription: data.discription,
            availability: data.availability,
            price: data.price,
        };
        dispatch(changeProduct(newProduct));
        setEditingProductId(null);
    };

    const deleteProductButton = (id) => {
        dispatch(deleteProduct(id));
    };

    return (
        <div className="productListBox">
            <h1 className="productListBox_header">Products list</h1>
            {products.map((product) => {
                if (editingProductId == product.id) {
                    return (
                        <form key={product.id} className="addProductBox" ref={formRef} onSubmit={changeProductButton}>
                            <input
                                type="text"
                                placeholder="Product name"
                                className="addProductBox_input"
                                name="name"
                                defaultValue={product.name}
                            />
                            <input
                                type="text"
                                placeholder="Product discription"
                                className="addProductBox_inputBig"
                                name="discription"
                                defaultValue={product.discription}
                            />
                            <div className="addProductBox_radioButtonBox">
                                <label className="addProductBox_radioLabel">
                                    Product is in stock
                                    <input
                                        type="radio"
                                        name="availability"
                                        value={true}
                                        className="addProductBox_radioButton"
                                    />
                                </label>
                                <label className="addProductBox_radioLabel">
                                    Product is out of stock
                                    <input
                                        type="radio"
                                        name="availability"
                                        value={false}
                                        className="addProductBox_radioButton"
                                    />
                                </label>
                            </div>
                            <input
                                type="number"
                                name="price"
                                step={100}
                                className="addProductBox_input"
                                defaultValue={product.price}
                            />
                            <button className="addProductBox_button" type="submit">
                                Submit
                            </button>
                        </form>
                    );
                } else {
                    return (
                        <div key={product.id} className="productBox">
                            <h3 className="productBox_header">{product.name}</h3>
                            <p className="productBox_discription">{product.discription}</p>
                            <p className="productBox_availability">
                                {getTextAvailabilityProduct(product.availability)}
                            </p>
                            <p className="productBox_price">Price: {product.price}</p>
                            <button className="productBox_delete" onClick={() => deleteProductButton(product.id)}>
                                Delete
                            </button>
                            <button className="productBox_change" onClick={() => setEditingProductId(product.id)}>
                                Change
                            </button>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default ProductsList;
