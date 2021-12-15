import UserListing from "./UserListing";
import avatar from "../../../assets/images/user.png";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import Roles from "./Roles";
import UserContent from "./UserContent";

const HomeContent = () => {
  const users = [
    {
      name: "Steve Banks",
      email: "steve@meliometrics.com",
      image: avatar,
    },
    {
      name: "Steve Banks",
      email: "steve@meliometrics.com",
      image: avatar,
      update: true,
    },
    {
      name: "Steve Banks",
      email: "steve@meliometrics.com",
      image: avatar,
    },
    {
      name: "Steve Banks",
      email: "steve@meliometrics.com",
      image: avatar,
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
