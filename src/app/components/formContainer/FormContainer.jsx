import React from "react";

const FormContainer = (props) => {
  const { children } = props;
  return (
    <>
      <div className="rounded-lg p-8 overflow-auto bg-[#121212] w-[100%] h-[100%]">
        {children}
      </div>
    </>
  );
};

export default FormContainer;
