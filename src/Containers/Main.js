import { Container, Row } from "react-bootstrap";

const Main = ({ children }) => (
  <main>
    <Container>
      <Row>{children}</Row>
    </Container>
  </main>
);

export default Main;
