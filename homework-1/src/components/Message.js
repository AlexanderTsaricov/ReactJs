function Message({ text }) {
    return (
        <div className="messageComponentBox">
            <h2 className="messageComponentBox_header">This is Message component</h2>
            <p className="messageComponentBox_text">{text}</p>
        </div>
    );
}

export default Message;
