import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";


function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }



  return (
    <div className="note">
      <h1>{props.title}</h1>
    
        <iframe
          src={props.content}
          width="100%"
          height="200vh"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;

