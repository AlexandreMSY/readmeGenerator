import React from "react";

const Header = (props) => {
  const { formTitle, formDescription } = props;
  return (
    <>
      <h1 className="text-2xl font-bold">{formTitle}</h1>
      <p className="tracking-wide">
        {formDescription}
      </p>
    </>
  );
};

export default Header
