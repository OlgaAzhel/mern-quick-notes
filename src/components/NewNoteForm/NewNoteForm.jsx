import "./NewNoteForm.css"
import { useState } from "react";

import * as notesAPI from '../../utilities/notes-api';

export default function NewNoteForm({ user, getNotes, setNotes , notes}) {
    const [formData, setFormData] = useState({
        text: "",
        user: user
    });

    function handleChange(evt) {
        const newFormData = {
            ...formData,
            [evt.target.name]: evt.target.value,
            user: user
        };
        setFormData(newFormData);
    }

    async function handleAddNote(evt) {
        evt.preventDefault();
        const newNote = await notesAPI.createNote(formData);
        setNotes([...notes, newNote])
        setFormData({
            text: "",
            user: user
        });
    }


    return (
        <>
            <form onSubmit={handleAddNote}>
                <input className="note-input"
                    name="text"
                    value={formData.text}
                    placeholder="New Note"
                    onChange={handleChange}
                    required
                />
                <button type="submit">ADD NOTE</button>
            </form>
        </>
    );
}
