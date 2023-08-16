"use client";

import React, { useState } from "react";
import Header from "../Header";

const Contact = (props) => {
  const [creators, setCreators] = useState(1);
  return (
    <>
      <div className="flex flex-col gap-4 text-white">
        <Header
          formTitle="Contact"
          formDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae amet
        commodi ad vitae sit recusandae velit. Quas ratione labore veritatis
        saepe rerum ipsum voluptatem eveniet. Amet porro cumque sequi sapiente?"
        />
        <div>
          <label htmlFor="creator">Creator 1</label>
          <input
            type="text"
            name="creator"
            id="creator"
            className="duration-1000 w-full bg-transparent border-b outline-none text-sm focus:border-lime-400"
          />
        </div>
        <div className="flex flex-row gap-4 text-sm">
          <button
            className="border border-green-500 p-1"
            onClick={() => {
              setCreators((value) => value + 1);
              console.log(creators);
            }}
          >
            Add Creator
          </button>
          <button
            className="border border-green-500 p-1"
            onClick={() => {
              if (creators > 1) {
                setCreators((value) => value - 1);
              }
              console.log(creators);
            }}
          >
            Remove Creator
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
