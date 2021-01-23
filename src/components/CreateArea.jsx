import React from "react";

function CreateArea(props) {
    const [note, setNote] = React.useState({
        title: "",
        content: ""    
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function makeNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
    <div>
        <form>
            <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
            <textarea name="content" onChange={handleChange} value={note.content} placeholder="Write a new note..." rows="3" />
            <button onClick={makeNote}>Add</button>
        </form>
    </div>
    );
}

export default CreateArea;