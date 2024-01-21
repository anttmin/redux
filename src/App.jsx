import React, { useState } from "react";
import Noteapp from "./components/Noteapp";
import Note from "./components/Note";
import Nav from "./components/Nav";
import Intro from "./components/Intro";

const App = () => {
  // define state
  const [notes, setNote] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // get notes when start
  // useEffect(()=>{
  //   getNotes()
  // },[])

  const getNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://firenote-15213-default-rtdb.firebaseio.com/notes.json"
      );

      const notes = await response.json();
      // console.log(notes)
      const modifiedNotes = [];

      if (!response.ok) {
        throw new Error("Cannot connet to the firebase");
      }

      for (const key in notes) {
        modifiedNotes.push({
          id: key,
          note: notes[key],
        });
      }

      setNote(modifiedNotes);
    } catch (err) {
      setError(err.message);
    }
    // console.log('this is app.jsx',getNotes);
    setLoading(false);
  };
  return (
    <div className="fireNote">
      <Nav getNotes={getNotes} totalNotes={notes.length}/>
      {loading && !error && <p className="message">Getting notes..</p>}
      {error && !loading && <p className="message error">{error}</p>}
      {!loading && !error && (
        <>
          <Noteapp getNotes={getNotes} />
          {notes.map((note, index) => (
            <Note key={index} note={note} getNotes={getNotes}/>
          ))}
        </>
      )}
      {notes.length < 1 && <Intro />}
    </div>
  );
};

export default App;

//hero icon
