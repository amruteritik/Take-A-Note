import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function BucketArea(props) {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }
  
    function deleteNote(id) {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }
  
    return (
      <div>
        <h1 className="bucket_title">{props.title}</h1>
        <CreateArea onAdd={addNote} />
        {console.log(notes)}
        {notes.map((noteItem, index) => {
          
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
       
      </div>
    );
}

export default BucketArea;
