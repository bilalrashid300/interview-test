import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import mail from "../../../assets/images/mail.png";

const UserListing = (props) => {
  const { users } = props;
  const [filterUser, setFilterUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState(1);
  
  useEffect(() => {
    setFilterUsers(users);
  }, [users]);

  return (
    <div className="userListWrapper">
      <div>
        <div className="p-3 border-bottom">
          <Form.Control
            type="text"
            placeholder="User Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="userList">
          {filterUser?.map((user, index) => {
            return user?.name?.includes(search) ||
              user?.email?.includes(search) ? (
              <SingleUser
                user={user}
                key={index}
                activeId={activeId}
                setActiveId={setActiveId}
              />
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <Button className="inviteUserBtn">
        <FontAwesomeIcon icon={faPlusCircle} className="me-2" />
        Invite User
      </Button>
    </div>
  );
};

const SingleUser = (props) => {
  const { user, activeId, setActiveId } = props;
  return (
    <div
      className={`singleUser ${user?.id === activeId ? "active" : ""}`}
      onClick={() => setActiveId(user?.id)}
    >
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
