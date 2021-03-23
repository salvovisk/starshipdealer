import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { addShip, fetchAllShips } from "./Store/actions";

import Main from "./Containers/Main";
import Header from "./Components/Header";
import CardStarship from "./Components/CardStarship";
import StarshipForm from "./Components/StarshipForm";
import Loader from "./Components/Loader";
import Message from "./Components/Message";
import "./App.css";

axios.defaults.headers.post["Content.type"] = "application/json";

function App() {
  const [showFormModal, setShowFormModal] = useState(false);

  const [newStarship, setNewStarship] = useState({});

  const dispatch = useDispatch();
  const starshipsState = useSelector((state) => state);
  const { loading, error, starships } = starshipsState;

  // const getAllStarships = async () => {
  //   const { data: starships } = await axios.get(
  //     "http://localhost:5000/starships"
  //   );
  //   setStarships(starships);
  // };

  useEffect(() => {
    dispatch(fetchAllShips());
  }, [dispatch]);

  const onInputChange = (e) => {
    setNewStarship((starship) => ({
      ...starship,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClose = () => {
    setShowFormModal(false);
    setNewStarship({});
  };

  const handleShow = () => {
    setShowFormModal(true);
  };

  const checkform = () =>
    newStarship.name &&
    newStarship.manufacturer &&
    newStarship.image &&
    newStarship.crew >= 0 &&
    newStarship.passengers >= 0 &&
    newStarship.cargo_capacity >= 0;

  const addNewStarship = async (e) => {
    e.preventDefault();
    if (checkform()) {
      dispatch(addShip(newStarship));
      dispatch(fetchAllShips());
    } else {
      throw new Error("Form not valid");
    }
  };

  return (
    <div className="App">
      <Header />
      {error && <Message variant="warning" msg={error} />}
      {loading ? (
        <Loader />
      ) : (
        <Main>
          {starships?.map((starship) => (
            <Col md={6} lg={4} key={starship.id} className="my-3">
              <CardStarship starship={starship} />
            </Col>
          ))}
        </Main>
      )}
      <StarshipForm
        show={showFormModal}
        handleClose={handleClose}
        onInputChange={onInputChange}
        addPost={addNewStarship}
      />
      <Button
        className={"addButton"}
        size={"lg"}
        variant={"primary"}
        onClick={handleShow}
      >
        +
      </Button>
    </div>
  );
}

export default App;
