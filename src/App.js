import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { addShip, fetchAllShips } from "./Store/actions";

import Main from "./Containers/Main";
import NavbarComponent from "./Components/NavbarComponent";
import Header from "./Components/Header";
import CardStarship from "./Components/CardStarship";
import LogForm from "./Components/LogForm";
import StarshipForm from "./Components/StarshipForm";
import Loader from "./Components/Loader";
import Message from "./Components/Message";
import "./App.css";

axios.defaults.headers.post["Content.type"] = "application/json";

function App() {
  const [newStarship, setNewStarship] = useState({});
  const dispatch = useDispatch();
  const starshipsState = useSelector((state) => state.starships);
  const { loading, error, starships } = starshipsState;
  const userState = useSelector((state) => state.user);
  const { name, isLogged } = userState;

  // New Ship Modal
  const [showFormModal, setShowFormModal] = useState(false);

  const handleFormModalClose = () => {
    setShowFormModal(false);
    setNewStarship({});
  };

  const handleFormModalShow = () => {
    setShowFormModal(true);
  };
  // ----------------------------------------

  // LoginModal
  const [showLogModal, setShowLogModal] = useState(false);

  const handleLogModalClose = () => {
    setShowLogModal(false);
  };

  const handleLogModalShow = () => {
    setShowLogModal(true);
  };
  // ------------------------------------------

  useEffect(() => {
    dispatch(fetchAllShips());
  }, [dispatch]);

  const onInputChange = (e) => {
    setNewStarship((starship) => ({
      ...starship,
      [e.target.name]: e.target.value,
    }));
  };

  // Form Validation for new ships
  const checkform = () =>
    newStarship.name &&
    newStarship.manufacturer &&
    newStarship.image &&
    newStarship.crew >= 0 &&
    newStarship.passengers >= 0 &&
    newStarship.cargo_capacity >= 0;

  // adding new ships after Form Validation
  const addNewStarship = async (e) => {
    e.preventDefault();
    if (checkform()) {
      dispatch(addShip(newStarship));
    } else {
      throw new Error("Form not valid");
    }
  };
  // ----------------------------------------

  return (
    <div className="App">
      <NavbarComponent openLogin={handleLogModalShow} />
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
      <LogForm show={showLogModal} handleClose={handleLogModalClose} />
      <StarshipForm
        show={showFormModal}
        handleClose={handleFormModalClose}
        onInputChange={onInputChange}
        addPost={addNewStarship}
      />
      <Button
        className={"addButton"}
        size={"lg"}
        variant={"primary"}
        onClick={handleFormModalShow}
      >
        +
      </Button>
      <Button
        className={!isLogged ? "LogInBtn" : "disabled"}
        size={"lg"}
        variant={"primary"}
        onClick={handleLogModalShow}
      >
        {" "}
        Log in
      </Button>
    </div>
  );
}

export default App;
