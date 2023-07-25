import React from "react";

const FormContainer = (props) => {
  return (
    <>
      <div className="text-white p-8">
        {props.children}
      </div>
    </>
  );
};

export default FormContainer;
