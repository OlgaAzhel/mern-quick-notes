import * as notesAPI from '../../utilities/notes-api';
import "./NoteListItem.css"

export default function NoteListItem({ notes, note, index, setNotes }) {
    const handleClick = async () => {
       const deleteComplete = await notesAPI.deleteNote(note);
       console.log("")
       if (deleteComplete) {
        const newNotes = notes.filter(n => {
            return n._id !== note._id
        })
        console.log("NEW NOTES ARRIVED:",newNotes)
        setNotes(newNotes)

       }
    };
    const date = new Date(note.createdAt)
    const formattedDate = date.toLocaleDateString('en-us', {
        timeZone: 'GMT', year: "numeric", month: "short",
        day: "numeric"
    })

    return (
        <li className="NoteListItem">
            <div className="note-ctr">
            <span className='note-text'>{note.text}</span>
            <span>{formattedDate}</span>
            <button onClick={handleClick}>DELETE NOTE</button>
            </div>
        </li>
    );
}