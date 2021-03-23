import { Spinner, Container } from "react-bootstrap";

const Loader = () => (
  <Container
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Spinner variant="warning"  animation="border" />
  </Container>
);

export default Loader;
