import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';



function CreateArea(props) {

  const [bucket, setBucket] = useState("");

  function handleChange(event) {
    const value = event.target.value;

    setBucket(value);
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(bucket);
    setBucket("");
  }


  return (
    <div>
      <form className="create-note">
          <input
            name="Title"
            onChange={handleChange}
            value={bucket}
            placeholder="Bucket Title"
          />

          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
       
      </form>
    </div>
  );
}

export default CreateArea;
