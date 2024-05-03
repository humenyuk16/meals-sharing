const Modal = ({ children, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const handleModalClick = (event) => {
    // Prevent closing if the click occurs inside the modal content
    event.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
