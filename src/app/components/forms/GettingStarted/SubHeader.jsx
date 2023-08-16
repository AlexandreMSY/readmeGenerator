import React from "react";

const SubHeader = (props) => {
  const { title, description } = props;
  return (
    <>
      <div className="flex flex-col gap-1">
        <h4 className="text-xl">{title}</h4>
        <p className="">{description}</p>
      </div>
    </>
  );
};

export default SubHeader;
