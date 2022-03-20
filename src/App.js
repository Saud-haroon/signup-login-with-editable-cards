import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import NoteList from './components/NoteList';


function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: 'helloWorld',
    },
    {
      id: 2,
      text: 'helloWorld 2',
    },
  ])

  const [users, setUsers] = useState([
    {
      email:'admin',
      password:'admin123'
    }
  ])

  
  // let navigate = useNavigate();

  const HandleAdd = (text) => {
    if (text !== "") {

      const newNote = {
        text: text,
      };
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    } else {
      alert('Please Add Note')
    }
  };

  const HandleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const HandleUser = (user) => {
    debugger
    console.log(user);
    if (user.firstName === "" || user.lastName === "" || user.dob === "" || user.email === "" || user.password === "") {
      alert('Please fill all required Fields')
    } else {
      const NewUser = {
        email: user.email,
        password: user.password
      }

      const newUsers = [...users, NewUser];
      setUsers(newUsers);

    }
  };

  useEffect(() => {
    const notes = JSON.parse(
      localStorage.getItem('notesData')
    );

    if (notes) {
      setNotes(notes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'notesData',
      JSON.stringify(notes)
    );
  }, [notes]);



  return (
    <BrowserRouter>
      <div className="App">
        {/* <SignUp/> */}
        <Routes>


          <Route path="/" element={<NoteList deleteNote={HandleDelete} AddNewNote={HandleAdd} notes={notes} />} />
          <Route path="/login" element={<Login userData={users} />} />
          <Route path="/signup" element={<SignUp AddNewUser={setUsers} user={users} />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
