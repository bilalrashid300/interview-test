import UserListing from "./UserListing";
import avatar from "../../../assets/images/user.png";
import { Col, Row} from "react-bootstrap";
import UserContent from "./UserContent";

const HomeContent = () => {
  const users = [
    {
      name: "Steve Banks",
      email: "steve@meliometrics.com",
      image: avatar,
      id: 1,
    },
    {
      name: "Ali",
      email: "ali@meliometrics.com",
      image: avatar,
      update: true,
      id: 2,
    },
    {
      name: "Steve Banks",
      email: "steve@meliometrics.com",
      image: avatar,
      id: 3,
    },
    {
      name: "Steve Banks",
      email: "steve@meliometrics.com",
      image: avatar,
      id: 4,
    },
  ];

  return (
    <Row className="mt-4 content">
      <Col md={4} className="mb-4 mb-md-0">
        <UserListing users={users} />
      </Col>
      <Col md={8}>
        <UserContent />
      </Col>
    </Row>
  );
};

export default HomeContent;
