import {
    ADD_TASK,
    SET_COMPLETED_TASK,
    SET_NOTCOMPLETED_TASK,
    ADD_TASKS,
    START_LOAD_TASK,
    END_LOAD_TASK,
} from "../actions/taskActions";

const initialState = {
    tasks: [],
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, { ...action.payload }] };
        case SET_COMPLETED_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => (task.id === action.payload ? { ...task, completed: true } : task)),
            };
        case SET_NOTCOMPLETED_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => (task.id === action.payload ? { ...task, completed: false } : task)),
            };
        case START_LOAD_TASK:
            console.log("Start loading...");
            break;
        case END_LOAD_TASK:
            console.log("The end loading");
            break;
        case ADD_TASKS:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    ...action.payload.filter(
                        (task) => !state.tasks.some((existingTask) => existingTask.id === task.id)
                    ),
                ],
            };
        default:
            return state;
    }
};

export default tasksReducer;
