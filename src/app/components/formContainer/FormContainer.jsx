import React from "react";

const FormContainer = (props) => {
  const { children } = props;
  return (
    <>
      <div className="border border-transparent rounded-lg text-white p-8 overflow-auto overflow-auto mb-[10%] bg-[#121212] h-screen w-[100%] md:w-[40%] lg:h-[100%] w-6/12">
        {children}
      </div>
    </>
  );
};

export default FormContainer;
