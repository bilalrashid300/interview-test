import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import AccordianCustom from "../../accordian";

const Roles = () => {
  const roles = [
    {
      title: "Static Date (MM Only)",
      value: 4,
      data: ["View data", "Manage data", "View data", "Manage data"],
    },
    {
      title: "Organisations (MM Only)",
      value: 4,
      data: ["View data", "Manage data", "View data", "Manage data"],
    },
    {
      title: "Users",
      value: 4,
      data: ["View data", "Manage data", "View data", "Manage data"],
    },
    {
      title: "Question Creation (MM Only)",
      value: 4,
      data: ["View data", "Manage data", "View data", "Manage data"],
    },
    {
      title: "Question Creation",
      value: 4,
      data: ["View data", "Manage data", "View data", "Manage data"],
    },
  ];

  return (
    <div className="p-4 rolesCardWrapper">
      <RoleCard roles={roles} type="dark" />
      <div className="assignBtns d-flex flex-column align-self-center">
        <Button className="mb-3">
          Assign
          <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
        </Button>
        <Button className="mb-3" disabled>
          <FontAwesomeIcon icon={faChevronLeft} className="me-2" />
          Rescind
        </Button>
      </div>
      <RoleCard roles={roles} />
    </div>
  );
};

const RoleCard = (props) => {
  const { roles, type } = props;
  return (
    <div className={`roleCard ${type} mb-3`}>
      <div className="cardTitle">Available Roles</div>
      <div className="cardBody">
        <AccordianCustom data={roles} />
      </div>
    </div>
  );
};

export default Roles;
