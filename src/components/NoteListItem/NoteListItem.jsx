import * as notesAPI from '../../utilities/notes-api';
import "./NoteListItem.css"


export default function NoteListItem({ notes, note, index, setNotes, user }) {
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
    const handleEdit = async () => {
        
    }

    const date = new Date(note.createdAt)

    const formattedDateTime = date.toLocaleString('en-US', {
        timeZone: 'EST', year: "numeric", month: "short",
        day: "numeric", hour: 'numeric', minute: 'numeric',hour12: true })

    return (
        <li className="NoteListItem">
            <div className="note-ctr">
            <span className='note-text'>{note.text}</span>
            <span>{formattedDateTime}</span>
            <button onClick={handleEdit}>EDIT NOTE</button>
            <button onClick={handleClick}>DELETE NOTE</button>
            </div>
        </li>
    );
}