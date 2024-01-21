import React from "react";
import Deleteicon from "../Svgs/Deleteicon";

const Note = ({ note ,getNotes }) => {
  // destructor note object
  const { note: text, id } = note;

  // delete node
  const deleteNote = async () => {
    
    try{
      const reponse = await fetch(
        `https://firenote-15213-default-rtdb.firebaseio.com/notes/${id}.json`,
        {
          method: "DELETE",
        }
        
      );
      if(!reponse.ok){
        throw new Error('Failed to delete this note')
      }
      getNotes();
      // console.log('at note',getNotes);
    }catch(err){
      alert(err.message)
    }
  };
  return (
    <div className="card card-ctr">
      <h3>+{text}</h3>
      <div onClick={deleteNote}>
        <Deleteicon />
      </div>
    </div>
  );
};

export default Note;
