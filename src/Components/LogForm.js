import { useRef } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logIn } from "../Store/actions";

const LogForm = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  const form = useRef(null);

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(form.current);
    const userData = Object.fromEntries(data);
    try {
      dispatch(logIn(userData));
      handleClose();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal size="xl" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Form">
          <Form ref={form} onSubmit={onSubmit} style={{ width: "100%" }}>
            <Form.Row>
              <Col>
                <Form.Control
                  required
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Col>
                <Form.Control
                  required
                  type="text"
                  name="surname"
                  placeholder="Enter your surname"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid surname.
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Col>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <br />
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LogForm;
