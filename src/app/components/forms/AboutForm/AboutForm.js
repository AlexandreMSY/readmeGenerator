import React from "react";
import Header from "../Header";

const AboutForm = (props) => {
  const { handleChange, value } = props;
  return (
    <>
      <div className="flex flex-col gap-8 text-white">
        <Header formTitle="About" />
        <textarea
          className="bg-gray-900 outline-none h-[40em] p-2"
          name="aboutText"
          onChange={handleChange}
          value={value}
          style={{ resize: "none" }}
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          delectus corrupti deserunt ad quaerat exercitationem veniam id,
          nostrum accusamus. Consectetur rerum inventore obcaecati ipsa culpa
          suscipit quo quae architecto expedita.
        </p>
      </div>
    </>
  );
};

export default AboutForm;
