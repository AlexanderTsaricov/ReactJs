import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { SET_COMPLETED_TASK, SET_NOTCOMPLETED_TASK, ADD_TASKS } from "../actions/taskActions";
import { fetchTasks } from "../data/fetchTasks";

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

    useEffect(() => {
        dispatch(fetchTasks())
            .unwrap() // развернёт результат из `fulfilled`
            .then((data) => {
                console.log("Данные загружены:", data);
                dispatch({ type: ADD_TASKS, payload: data });
            })
            .catch((error) => {
                console.error("Ошибка загрузки:", error);
            });
    }, [dispatch]);

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
