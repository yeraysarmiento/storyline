import "./Modal.css";

function Modal({ onDelete }) {
  return (
    <main className="modal-view">
      <section className="modal">
        <p>Are you sure you want to delete?</p>
        <div className="modal__buttons">
          <button className="modal__cancel">Cancel</button>
          <button className="modal__delete" onClick={() => onDelete()}>
            Delete
          </button>
        </div>
      </section>
    </main>
  );
}

export default Modal;
