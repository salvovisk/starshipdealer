import axios from "axios";
import { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAllShips } from "../Store/actions";
import SimpleCardDetail from "./SimpleCardDetail";

const CardStarship = ({ starship }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

  const deleteStarship = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/starships/${starship.id}`
      );
      if (res.status !== 200) {
        throw new Error("Delete Failed");
      }
      dispatch(fetchAllShips());
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Card style={{ height: 420 }}>
      <Card.Header as="h5">{starship.name}</Card.Header>
      <Card.Img
        style={{ height: 150, objectFit: "cover" }}
        src={starship.image}
        alt={starship.name}
      />
      <Card.Body>
        <Card.Title>{starship.model}</Card.Title>
        <Card.Text>{starship.manufacturer}</Card.Text>
      </Card.Body>
      <Container className="d-flex justify-content-around my-3">
        <Button variant="primary" onClick={handleShow}>
          Details
        </Button>
        <Button variant="secondary" onClick={deleteStarship}>
          Delete
        </Button>
      </Container>

      <Card.Footer>
        <small className="text-muted">
          Credits : {starship.cost_in_credits}
        </small>
      </Card.Footer>

      <SimpleCardDetail
        starship={starship}
        show={open}
        handleClose={handleClose}
      />
    </Card>
  );
};

export default CardStarship;
