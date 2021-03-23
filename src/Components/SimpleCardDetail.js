import { Modal, Container, ListGroup } from "react-bootstrap";

export default ({ show, handleClose, starship }) => {
  return (
    <>
      <Modal show={show} handleClose={handleClose} centered>
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title>{starship.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <ListGroup variant="flush">
              <ListGroup.Item>length: {starship.length} meters</ListGroup.Item>
              <ListGroup.Item>crew: {starship.crew}</ListGroup.Item>
              <ListGroup.Item>passengers: {starship.passengers}</ListGroup.Item>
              <ListGroup.Item>
                cargo capacity: {starship.cargo_capacity} meters
              </ListGroup.Item>
              <ListGroup.Item>
                consumables: {starship.consumables}{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                hyperdrive rating: {starship.hyperdrive_rating}{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                max atmosphering speed: {starship.max_atmosphering_speed}{" "}
              </ListGroup.Item>
              <ListGroup.Item>MGLT: {starship.MGLT} </ListGroup.Item>
            </ListGroup>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};
