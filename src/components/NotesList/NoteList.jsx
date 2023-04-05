import NoteListItem from "../NoteListItem/NoteListItem";
export default function NoteList({ user, notes , setNotes}) {
    
    const NoteListItems = notes.map((n, idx) => (
        <NoteListItem
            note={n}
            index={idx}
            key={idx}
            user={user}
            notes={notes}
            setNotes={setNotes}
            // updateTodos={updateTodos}
            // removeToDo={removeToDo}
        />
    ));
    return <ul className="NoteList">{NoteListItems}</ul>;
}