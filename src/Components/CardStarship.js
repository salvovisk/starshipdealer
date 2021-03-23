import axios from "axios";
import { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import SimpleCardDetail from "./SimpleCardDetail";

const CardStarship = ({ starships, fetchAll }) => {
  const [open, setOpen] = useState(false);

  const deleteStarship = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/starships/${id}`);
      if (res.status !== 200) throw new Error("Delete Failed")
      fetchAll();
    } catch (err) {
      alert(err);
    }
  };

  return starships.map((starship) => (
    <Col md={3} key={starship.id}>
      <Card className="m-5" style={{ width: "15rem", height: 410 }}>
        <Card.Header as="h5">{starship.name}</Card.Header>
        <Card.Img
          style={{ height: 150, objectFit: "cover" }}
          src={starship.image}
        />
        <Card.Body>
          <Card.Title>{starship.model}</Card.Title>
          <Card.Text>{starship.manufacturer}</Card.Text>
        </Card.Body>

        <Card.Footer
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Button onClick={() => setOpen(true)} variant="primary">
            Details
          </Button>
          <Button onClick={() => deleteStarship(starship.id)} variant="danger">
            Delete
          </Button>
        </Card.Footer>
        <SimpleCardDetail
          show={open}
          handleClose={() => setOpen(false)}
          starship={starship}
        />
      </Card>
    </Col>
  ));
};

export default CardStarship;
