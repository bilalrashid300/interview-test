import { Accordion } from "react-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AccordianCustom = (props) => {
  const { data } = props;
  console.log(data);
  const rolesList = data.map((role, index) => {
    return (
      <Accordion.Item eventKey={index} key={index}>
        <Accordion.Header>
          <span className="index">{role?.value}</span>
          {role?.title}
        </Accordion.Header>
        <Accordion.Body>
          {role?.data?.map((item, index) => {
            return (
              <div key={index}>
                <FontAwesomeIcon className="icon me-2" icon={faInfoCircle} />
                {item}
              </div>
            );
          })}
          ;
        </Accordion.Body>
      </Accordion.Item>
    );
  });
  return <Accordion defaultActiveKey="0">{rolesList}</Accordion>;
};

export default AccordianCustom;
