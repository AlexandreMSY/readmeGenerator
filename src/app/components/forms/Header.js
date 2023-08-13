import React from "react";

const Header = (props) => {
  const { formTitle, formDescription } = props;
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">{formTitle}</h1>
        <p className="tracking-wide">{formDescription}</p>
      </div>
    </>
  );
};

export default Header;
