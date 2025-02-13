import "./App.css";
import TaskDiscription from "./components/TaskDisription";
import { Provider } from "react-redux";
import store from "./components/store.js";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <TaskDiscription />
            </Provider>
        </div>
    );
}

export default App;
