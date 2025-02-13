import { useSelector, useDispatch } from "react-redux";
import store from "./store";

function TaskDiscription() {
    const theme = useSelector((store) => store.theme.theme);
    const dispatch = useDispatch();

    const toggleLiteTheme = () => {
        dispatch({ type: "TOGGLE_LIGHT" });
    };

    const toggleDarkTheme = () => {
        dispatch({ type: "TOGGLE_DARK" });
    };

    return (
        <>
            <h1 className={theme}>Homework student Alexander for lesson 5</h1>
            <div>
                <p className={theme}>Need create application that allows to swith between lite and dark thems</p>
            </div>
            <button onClick={toggleDarkTheme}>Dark Theme</button>
            <button onClick={toggleLiteTheme}>Lite Theme</button>
        </>
    );
}

export default TaskDiscription;
