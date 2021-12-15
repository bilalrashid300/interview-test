import { useState } from "react";

const Content = (props) => {
  const { title, description, children } = props;
  const [readMore, setReadMore] = useState(true);
  const maxLength = 240;

  const contentLimit = (value) => {
    if (typeof value === "string" && readMore) {
      const result = value?.substring(0, maxLength);
      return result;
    }
    return value;
  };

  return (
    <div className="pageContent">
      <div className="contentHeader">
        <h6 className="mb-0">{title}</h6>
      </div>
      <div className="contentBody">
        {/* Description string max length limit */}
        {description && contentLimit(description)}
        &nbsp;
        <span
          className="text-primary text-bold"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "Read More" : "Read Less"}
        </span>
        {/* Children elements */}
        {children}
      </div>
    </div>
  );
};

export default Content;
