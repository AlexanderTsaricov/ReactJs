import "./App.css";
import CartReclam from "./components/CartReclam";
import Header from "./components/headers/Header";
import Logo from "./components/Logo";
import ToggleMenu from "./components/ToggleMenu";

function App() {
    return (
        <>
            <Header />
            <ToggleMenu />
            <Logo />
            <main>
                <CartReclam />
            </main>
        </>
    );
}

export default App;
