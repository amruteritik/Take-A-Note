import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

function Bucket(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div>
        <div className="note">
      <Link className="link_bucket" to={{pathname: `/${props.title}`}}>
          <h1>{props.title}</h1>
      </Link>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </div>
    </div>
  );
}

export default Bucket;
