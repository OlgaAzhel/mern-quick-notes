import { useEffect, useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import { getNotes } from '../../utilities/notes-api'
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import NotesList from '../../components/NotesList/NoteList'



export default function App() {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([])
  

  useEffect(function() {
    console.log('should only run ONCE')
    const sessionUser = getUser()
    setUser(sessionUser)
      
    
  }, [])
  
  useEffect(function () {
    getNotes(user)
      .then(result => {
        setNotes(result)
      })
  }, [user])

 
  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user} setUser={setUser} setNotes={setNotes}/>

            <br />
          < NewNoteForm user={user} getNotes={getNotes} setNotes={setNotes} notes={notes}/>
          {notes.length>0 ?
          <>
          <h3>My Notes:</h3>
          < NotesList notes={notes} user={user} setNotes={setNotes}/>
          </>
          :
          <h3>No Notes Yet!</h3>
          }
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
