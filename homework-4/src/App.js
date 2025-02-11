import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import HeadPage from "./components/HeadPage";

function App() {
    return (
        <Router>
            <Link className="nav" to="/">
                Head page
            </Link>
            <Link className="nav" to="/About">
                About
            </Link>
            <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/" element={<HeadPage />} />
            </Routes>
        </Router>
    );
}

export default App;
