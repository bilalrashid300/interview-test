import { Button } from "react-bootstrap";

const CustomButton = (props) => {
  
  const { className, children } = props; 

  return (
    <Button className={`${className} customBtn`} {...props}>
        {children}
    </Button>
  );
};

export default CustomButton;
