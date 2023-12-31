import React from "react";

const Header = (props) => {
  const { formTitle, formDescription } = props;
  return (
    <>
      <header>
        <h1 className="text-2xl font-bold">{formTitle}</h1>
        <p className="tracking-wide">{formDescription}</p>
      </header>
    </>
  );
};

export default Header;
