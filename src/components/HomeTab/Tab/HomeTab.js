import { Tab, Tabs } from "react-bootstrap";
import HomeContent from "../Content/HomeContent";

const HomeTab = () => {
  return (
    <Tabs
      defaultActiveKey="users"
      id="uncontrolled-tab-example"
      className="mt-5"
    >
      <Tab eventKey="information" title="Basic Information">
          info
      </Tab>
      <Tab eventKey="users" title="Users">
          <HomeContent />
      </Tab>
      <Tab eventKey="notes" title="Notes">
          notes
      </Tab>
    </Tabs>
  );
};

export default HomeTab;
