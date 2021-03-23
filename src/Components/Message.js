import { Alert } from "react-bootstrap";

const Message = ({ variant, msg }) => <Alert variant={variant}>{msg}</Alert>;

export default Message;
