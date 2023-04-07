import NoteListItem from "../NoteListItem/NoteListItem";
export default function NoteList({ user, notes , setNotes, getNotes}) {
    
    async function handleSort() {
        const newNotes = await notes.sort(function(a,b) {
            const dateA = new Date(a.createdAt)
            const dateB = new Date(b.createdAt)
            if (dateA > dateB) {

                return dateB - dateA
            } else {
                return dateA - dateB
            }
        })
        console.log("NEW NOTES:",newNotes)
        setNotes([...newNotes])
    }
    const NoteListItems = notes.map((n, idx) => (
        <NoteListItem
            note={n}
            index={idx}
            key={idx}
            user={user}
            notes={notes}
            setNotes={setNotes}
            getNotes={getNotes}
            // updateTodos={updateTodos}
            // removeToDo={removeToDo}
        />
    ));
    return (
    <>
    <div className="note-list">
    <button className="sort-button" onClick={handleSort}>SORT NOTES BY DATE ⬇⬆</button>
    <ul className="NoteList">{NoteListItems}</ul>
    </div>
    </>
    )
}