import "./App.css";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";

function App() {
    return (
        <div>
            <TasksList />
            <AddTask />
        </div>
    );
}

export default App;
