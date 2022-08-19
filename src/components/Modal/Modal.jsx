export const Modal = ({ children, modal, setModal }) => {
  return (
    <div
      className={
        modal
          ? "position-fixed top-0 start-0 w-100 h-100 bg-secondary"
          : "d-none"
      }
    >
      <div className="d-flex justify-content-between">
        <h2 className="text-center">Form</h2>
        <button onClick={() => setModal(false)} className="btn btn-danger">
          &times;
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};
