import { Container, Row } from "react-bootstrap";
import "./Main.css";

const Main = ({ children }) => (
  <main>
    <Container>
      <Row>{children}</Row>
    </Container>
  </main>
);

export default Main;
