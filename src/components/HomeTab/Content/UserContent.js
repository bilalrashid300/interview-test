import { Tab, Tabs } from "react-bootstrap";
import Roles from "./Roles";
import CustomButton from "../../button";

const UserContent = () => {
  return (
    <div className="userContentWrapper">
      <div>
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
      <div className="userContentFooter">
        <CustomButton className="outline">Cancel</CustomButton>
        <CustomButton className="ms-3">Update</CustomButton>
      </div>
    </div>
  );
};

export default UserContent;
