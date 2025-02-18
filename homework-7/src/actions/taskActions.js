export const ADD_TASK = "ADD_TASK";
export const SET_COMPLETED_TASK = "SET_COMPLETED_TASK";
export const SET_NOTCOMPLETED_TASK = "SET_NOTCOMPLETED_TASK";
export const START_LOAD_TASK = "START_LOAD_TASK";
export const END_LOAD_TASK = "END_LOAD_TASK";
export const ADD_TASKS = "ADD_TASKS";

export const addTask = ({ title }) => ({
    type: ADD_TASK,
    payload: {
        id: Date.now(),
        title: title,
        completed: false,
    },
});

export const setCompletedTask = ({ id }) => ({
    type: SET_COMPLETED_TASK,
    payload: id,
});

export const setNotCompletedTask = ({ id }) => ({
    type: SET_NOTCOMPLETED_TASK,
    payload: id,
});

export const addTasks = ({ tasks }) => ({
    type: ADD_TASKS,
    payload: tasks,
});
