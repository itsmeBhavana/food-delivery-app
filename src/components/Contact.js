import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center m-8 font-bold text-3xl ">Contact</h1>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="name"
          className="border border-black mx-auto my-4 p-2 w-4/12 rounded-lg"
        />
        <textarea
          type="text"
          placeholder="message"
          className="border border-black mx-auto my-4 p-2 w-4/12 h-40 rounded-lg"
        />
        <button className="bg-black text-white border border-black mx-auto my-8 p-2 w-2/12 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
