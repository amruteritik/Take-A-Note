import React, {useState} from "react";
import ModalVideo from "react-modal-video";

function Modal(props) {
  const [isOpen, setOpen] = useState(true);

  function handleOpen(){
    setOpen(false);
    return ;
  }

  return (
     <div>
      <ModalVideo
        channel="custom"
        autoplay
        url={props.link}
        isOpen={isOpen}
        onClose={handleOpen}
      ></ModalVideo>
     </div>
  );
}

export default Modal;
