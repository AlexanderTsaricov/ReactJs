import logo from "./logo.svg";
import "./App.css";
import "./components/Message";
import Message from "./components/Message";

function App() {
    const textToMessage = "Text for Message";
    return (
        <div className="App">
            <Message text={textToMessage} />
        </div>
    );
}

export default App;
