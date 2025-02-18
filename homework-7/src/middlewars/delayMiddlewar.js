const delayMiddleware = (store) => (next) => (action) => {
    if (action.type === "tasks/fetchTasks") {
        console.log("Wait");
        setTimeout(() => {
            next(action);
        }, 3000);
    } else {
        next(action);
    }
};

export default delayMiddleware;
