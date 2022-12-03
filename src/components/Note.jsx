import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onDelete={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default Note;