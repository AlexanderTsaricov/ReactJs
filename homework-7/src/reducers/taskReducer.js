import { ADD_TASK, SET_COMPLETED_TASK, SET_NOTCOMPLETED_TASK } from "../actions/taskActions";

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
        default:
            return state;
    }
};

export default tasksReducer;
