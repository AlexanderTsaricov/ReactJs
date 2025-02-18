function getCompletedText(completed) {
    if (completed) {
        return "Completed";
    } else {
        return "No completed";
    }
}

function getButtonCompletedText(completed) {
    if (!completed) {
        return "Completed";
    } else {
        return "No completed";
    }
}

function Task({ id, title, completed, setCompleted, setNotCompleted }) {
    const getFuncByCompleted = completed ? setNotCompleted : setCompleted;
    return (
        <div key={id} className="taskBox">
            <p className="taskBox_title">{title}</p>
            <p className="taskBox_completed">{getCompletedText(completed)}</p>
            <button className="taskBox_button" onClick={() => getFuncByCompleted(id)}>
                {getButtonCompletedText(completed)}
            </button>
        </div>
    );
}

export default Task;
