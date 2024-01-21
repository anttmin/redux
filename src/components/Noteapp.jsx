import React, { useState } from "react";

const Noteapp = ({ getNotes }) => {
  // define state
  const [note, setNote] = useState("");

  // add new Note
  const addNote = async (e) => {
    e.preventDefault();
    if (note.trim().length === 0) {
      alert("plz enter valid note");
      return;
    }
    try {
      await fetch(
        "https://firenote-15213-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          body: JSON.stringify(note),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setNote("");
      getNotes();
    } catch (err) {
      console.log("plz try again..");
    }
  };
  return (
    <div>
      <form className="card" onSubmit={addNote}>
        <input
          type="text"
          placeholder="add note here"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="submit-btn">Add Note</button>
      </form>
    </div>
  );
};

export default Noteapp;
