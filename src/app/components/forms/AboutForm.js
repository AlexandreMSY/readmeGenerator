import React from "react";

const AboutForm = (props) => {
  const { handleChange, value } = props
  return (
    <>
      <div className="flex flex-col gap-8 text-white">
        <h1 className="text-2xl tracking-wide font-medium">About</h1>
        <textarea
          className="bg-gray-900 outline-none h-[40em] p-2"
          name="aboutText"
          onChange={handleChange}
          value={value}
          style={{ resize: "none" }}
        />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum delectus corrupti deserunt ad quaerat exercitationem veniam id, nostrum accusamus. Consectetur rerum inventore obcaecati ipsa culpa suscipit quo quae architecto expedita.</p>
      </div>
    </>
  );
};

export default AboutForm;
