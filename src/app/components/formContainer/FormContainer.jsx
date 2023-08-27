import React from "react";

const FormContainer = (props) => {
  const { children } = props;
  return (
    <>
      <div className="border border-gray-900 rounded-lg p-4 overflow-auto bg-[#121212] w-[100%] h-[100%] md:p-6">
        {children}
      </div>
    </>
  );
};

export default FormContainer;
