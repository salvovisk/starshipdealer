import { Modal } from "react-bootstrap";

export default ({ show, handleClose, starship }) => {
  return (
    <>
      <Modal centered show={show} handleClose={handleClose}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title> {starship.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          } }
          ></Modal.Body>
      </Modal>
    </>
  );
};
