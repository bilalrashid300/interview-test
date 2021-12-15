import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import CustomButton from "../../components/button";
import Content from "../../components/content";
import Header from "../../components/header";
import HomeTab from "../../components/HomeTab/Tab/HomeTab";

const Home = () => {
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <>
      <Header />
      <Container className="my-4">
        <Row>
          <Col md={5}>
            <InputGroup>
              <FormControl
                placeholder="Organization  Search"
                aria-label="Organization  Search"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </Col>
          <Col
            md={7}
            className="d-flex justify-content-between align-items-center mt-md-0 mt-3"
          >
            <CustomButton className="outline">Advance Search</CustomButton>
            <CustomButton>New Organization</CustomButton>
          </Col>
          <Col md={12} className="mt-4">
            <Content title="About Organization" description={description}>
                <HomeTab />
            </Content>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
