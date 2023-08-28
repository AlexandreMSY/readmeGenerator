import React from "react";

const FormContainer = (props) => {
  const { children } = props;
  return (
    <>
      <div className="p-3 w-[100%] md:p-6">
        <div className="p-2 h-fit">
          {children}
        </div>
      </div>
    </>
  );
};

export default FormContainer;
