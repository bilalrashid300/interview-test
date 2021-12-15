import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";
import mail from "../../../assets/images/mail.png";

const UserListing = (props) => {
  const { users } = props;
  const UserList = users?.map((user, index) => {
    return <SingleUser user={user} />;
  });

  return (
    <div className="userListWrapper">
      <div>
        <div className="p-3 border-bottom">
          <Form.Control type="text" placeholder="User Search" />
        </div>
        <div className="userList">{UserList}</div>
      </div>
      <Button className="inviteUserBtn">
          <FontAwesomeIcon icon={faPlusCircle} className="me-2" />
          Invite User
      </Button>
    </div>
  );
};

const SingleUser = (props) => {
  const { user } = props;
  return (
    <div className="singleUser">
      <div className="d-flex align-items-center">
        <img className="avatar" src={user?.image} alt="user" />
        <div className="ms-3">
          <p className="name">{user?.name}</p>
          <p className="email">{user?.email}</p>
        </div>
      </div>
      {user?.update && <img className="" src={mail} alt="user" />}
    </div>
  );
};

export default UserListing;
