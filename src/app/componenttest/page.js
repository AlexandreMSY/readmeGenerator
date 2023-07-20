"use client";

import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import DetailsForm from "../components/DetailsForm";

const page = () => {
  const [input, setInput] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const sendData = async () => {
    const req = await fetch('http://localhost:3000/api/createreadme', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input)
    })

    const res = await req.json()

    console.log(res);
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-center content-center bg-black w-screen h-screen lg:w-1/5">
          <h1 className="text-white text-5xl">ABC</h1>
          <button className="text-white text-5xl" onClick={sendData}>Fetch Test</button>
        </div>
        <div className="w-2/6">
          <FormContainer
            children={<DetailsForm handleChange={handleChange}/>}
          />
        </div>
        <div className="flex justify-center items-center content-center bg-black text-5xl w-3/6 h-screen">
          <h1 className="text-white">ABC</h1>
        </div>
      </div>
    </>
  );
};

export default page;
