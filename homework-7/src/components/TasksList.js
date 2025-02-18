import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { SET_COMPLETED_TASK, SET_NOTCOMPLETED_TASK } from "../actions/taskActions";

function TasksList() {
    const tasks = useSelector((state) => state.tasks).tasks || [];
    const dispatch = useDispatch();

    const setCompletedTask = (id) => {
        console.log(`Enter button setCompleted by id ${id}`);
        dispatch({ type: SET_COMPLETED_TASK, payload: id });
    };

    const setNotCompletedTask = (id) => {
        console.log(`Enter button setNotCompleted by id ${id}`);
        dispatch({ type: SET_NOTCOMPLETED_TASK, payload: id });
    };

    console.log("Redux state.tasks:", tasks);
    return (
        <div>
            {Array.isArray(tasks) ? (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        completed={task.completed}
                        setCompleted={setCompletedTask}
                        setNotCompleted={setNotCompletedTask}
                    />
                ))
            ) : (
                <p>Loading tasks...</p>
            )}
        </div>
    );
}

export default TasksList;
