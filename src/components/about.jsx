import React, { useState } from "react";
import '../style.css';

export default function AboutUs() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>About Us</h2>
            <p>
                - Leonardo Jonathan Fernandez Namlay (00000058084)
                - Jonathan Setyohadi (00000059549)
                - Adhy Ardana Setyawan (00000059569)
                - Andrew Thomas Agustinus (00000059999)
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      </>
  );
}