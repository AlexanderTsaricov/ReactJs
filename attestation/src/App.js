import "./App.css";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </Router>
    );
}

export default App;
