import { useDispatch } from "react-redux";
import { useState } from "react";
import { ADD_TASK } from "../actions/taskActions";

function AddTask() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const handleAddTask = () => {
        if (!value.trim()) return;
        dispatch({ type: ADD_TASK, payload: { id: Date.now(), title: value, completed: false } });
        setValue("");
    };

    return (
        <div className="addTaskBox">
            <input className="addTaskBox_input" type="text" onChange={(e) => setValue(e.target.value)} value={value} />
            <button className="addTaskBox_button" onClick={() => handleAddTask()}>
                Add task
            </button>
        </div>
    );
}

export default AddTask;
