function Modal({photo, toggleModal}) {
    const {name, category, description, index} = photo;
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 data-testid="modal-title" className="modalTitle">{name}</h3>
        <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt={description} />
        <p>{description}</p>
        <button onClick={toggleModal} type="button">Close this modal</button>
      </div>
    </div>
  );
}

export default Modal;
