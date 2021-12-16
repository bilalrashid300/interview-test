import CustomButton from "./button";

const Navigator = () => {
    return (
        <div className="userContentFooter">
          <CustomButton className="outline">Cancel</CustomButton>
          <CustomButton className="ms-3">Update</CustomButton>
        </div>
    )
};

export default Navigator;