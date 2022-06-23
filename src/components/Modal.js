import React from "react";
import "../styles/modal.css";

function Modal({
  largeImg,
  name,
  content,
  role,
  avatar,
  title,
  setModal,
  isLoading,
}) {
  function closeModal() {
    setModal(false);
  }

  return (
    <div className="modal__background">
      <div className="modal__container">
        <div className="modal__close" onClick={closeModal}>
          X
        </div>

        <img className="modal__image" src={largeImg} alt="img" />

        <div className="modal__details">
          <h3>{title}</h3>
          <p>{content}</p>

          <div className="modal__author">
            <img className="modal__avatar" src={avatar} alt="avatar" />
            <h4 style={{ marginLeft: "10px" }}>
              {name}-{role}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
