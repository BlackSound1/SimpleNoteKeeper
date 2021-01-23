import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

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

    function expand() {
        setExpanded(true);
    }

    return (
    <div>
        <form className="create-note">

            {isExpanded && <Zoom in={true} timeout={500} >
                <input name="title" 
                    onChange={handleChange} 
                    value={note.title} 
                    placeholder="Title" 
                />
                </Zoom>
            }
            

            <textarea name="content" 
                onClick={expand}
                onChange={handleChange} 
                value={note.content} 
                placeholder="Write a new note..." 
                rows={isExpanded ? 3 : 1} 
            />
            
            <Zoom in={isExpanded} timeout={500}>
                <Fab onClick={makeNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
            
        </form>
    </div>
    );
}

export default CreateArea;