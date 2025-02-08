import React, { useState } from "react";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
    ]);

    const deleteComment = (id) => {
        setComments(comments.filter((comment) => comment.id != id));
    };

    const addComment = () => {
        const inputText = document.querySelector(".addCommentBox_input");
        const id = (comments.length > 0 ? Math.max(...comments.map((comment) => comment.id)) : 0) + 1;
        setComments([...comments, { id: id, text: inputText.value }]);
    };
    return (
        <div className="commentsListBox">
            <div className="addCommentBox">
                <input className="addCommentBox_input" />
                <button className="addCommentBox_button" onClick={() => addComment()}>
                    add comment
                </button>
            </div>
            {comments.map((comment) => (
                <div key={comment.id} className="commentsListBox_commentBox">
                    <p className="commentsListBox_text">{comment.text}</p>
                    <button className="commentsListBox_button" onClick={() => deleteComment(comment.id)}>
                        delete comment
                    </button>
                </div>
            ))}
        </div>
    );
}

export default CommentsList;
