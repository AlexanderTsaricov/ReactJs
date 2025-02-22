import "./App.css";
import Header from "./components/headers/Header";
import Logo from "./components/Logo";
import ToggleMenu from "./components/ToggleMenu";

function App() {
    return (
        <>
            <Header />
            <ToggleMenu />
            <Logo />
            <main></main>
        </>
    );
}

export default App;
