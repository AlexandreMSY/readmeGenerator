import React from "react";

const FormContainer = (props) => {
  const { children } = props;
  return (
    <>
      <div className="text-white p-8 h-screen">
        {children}
      </div>
    </>
  );
};

export default FormContainer;
