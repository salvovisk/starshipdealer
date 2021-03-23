import axios from "axios";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import Main from "./Containers/Main";
import CardStarship from "./Components/CardStarship";
import StarshipForm from "./Components/StarshipForm";
import "./App.css";

axios.defaults.headers.post["Content.type"] = "application/json";

function App() {
  const [starships, setStarships] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const [newStarship, setNewStarship] = useState({});

  const getAllStarships = async () => {
    const { data: starships } = await axios.get(
      "http://localhost:5000/starships"
    );
    setStarships(starships);
  };

  useEffect(() => {
    getAllStarships();
  }, []);

  const checkform = () =>
    newStarship.name &&
    newStarship.manufacturer &&
    newStarship.image &&
    newStarship.crew >= 0 &&
    newStarship.passengers >= 0 &&
    newStarship.cargo_capacity >= 0;

  const onInputChange = (e) => {
    e.preventDefault();
    setNewStarship((starship) => ({
      ...starship,
      [e.target.name]: e.target.value,
    }));
  };

  const closeForm = () => {
    setNewStarship({});
    setShowFormModal(false);
  };

  const addNewStarship = async (e) => {
    e.preventDefault();
    if (checkform()) {
      await axios.post("http://localhost:5000/starships", newStarship);
      await getAllStarships();
    } else {
      throw new Error("Form not valid");
    }
  };

  return (
    <Main>
      <CardStarship starships={starships} />
      <StarshipForm
        show={showFormModal}
        handleClose={closeForm}
        onInputChange={onInputChange}
        addPost={addNewStarship}
      />
      <Button
        className={"addButton"}
        size={"lg"}
        variant={"primary"}
        onClick={() => setShowFormModal(true)}
        fetchAll={getAllStarships}
      >
        +
      </Button>
    </Main>
  );
}

export default App;
