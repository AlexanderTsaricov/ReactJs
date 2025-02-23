import "./App.css";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/product" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default App;
