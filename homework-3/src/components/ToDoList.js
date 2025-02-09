import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function ToDoList() {
    const [doList, setDoList] = useState([]);
    const [valueInput, setValueInput] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (valueInput != "") {
            setDoList([...doList, valueInput]);
            setValueInput("");
        }
    };

    const deleteDo = (index) => {
        setDoList(doList.filter((value, i) => i != index));
    };

    return (
        <div className="toDoListBox">
            <form onSubmit={submit} className="addDoBox">
                <TextField
                    required
                    id="outlined-required"
                    label="To Do"
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                />
                <Button variant="outlined" type="submit">
                    Add to Do
                </Button>
            </form>
            <div className="doListBox">
                {doList.map((toDo, index) => (
                    <div key={index}>
                        <p>{toDo}</p>
                        <Button variant="outlined" onClick={() => deleteDo(index)}>
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDoList;
