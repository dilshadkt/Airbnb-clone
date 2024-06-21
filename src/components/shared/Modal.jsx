import React from "react";

const Modal = ({ children, modal_id }) => {
  return (
    <div>
      <dialog id={modal_id} className="modal">
        <div className="modal-box min-h-fit max-h-[90%]">{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
