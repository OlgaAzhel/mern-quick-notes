import { useState } from "react";
import * as notesAPI from '../../utilities/notes-api';


export default function EditNotePage({ user, note, notes, setNotes, setEdit, getNotes}) {
    const [editFormData, setEditFormData] = useState({
        text: note.text,
        user: user,
        id: note._id
    });
    async function handleEditNote(evt) {
        evt.preventDefault();
        const newNote = await notesAPI.editNote(editFormData);
        setEdit(false)
        const newNotes = await getNotes()
        setNotes([...newNotes])

    }

    function handleChange(evt) {
        const newEditFormData = {
            ...editFormData,
            [evt.target.name]: evt.target.value,
            user: user,
            id: note._id
        };
        setEditFormData(newEditFormData);
    }

    return (
        <form onSubmit={handleEditNote}>
            <input className="note-edit-input"
                name="text"
                value={editFormData.text}
                placeholder="New Note"
                onChange={handleChange}
                required
            />
            <button type="submit">SAVE CHANGES</button>
        </form>
        
    )
}