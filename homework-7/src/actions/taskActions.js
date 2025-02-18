export const ADD_TASK = "ADD_TASK";
export const SET_COMPLETED_TASK = "SET_COMPLETED_TASK";
export const SET_NOTCOMPLETED_TASK = "SET_NOTCOMPLETED_TASK";

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
