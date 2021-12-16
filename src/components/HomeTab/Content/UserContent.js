import { Tab, Tabs } from "react-bootstrap";
import Roles from "./Roles";

const UserContent = () => {
  return (
    <div className="userContentWrapper">
        <Tabs defaultActiveKey="roles" id="uncontrolled-tab-example2">
          <Tab eventKey="user-details" title="User details">
            info
          </Tab>
          <Tab eventKey="roles" title="Roles">
            <Roles />
          </Tab>
          <Tab eventKey="other" title="Other association">
            notes
          </Tab>
        </Tabs>
    </div>
  );
};

export default UserContent;
