import { useEffect } from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Contact Page</h1>
      <form className="m-4 p-4">
        <input
          placeholder="Enter name"
          className="m-4 p-4 border-2 border-black"
        ></input>
        <input
          placeholder="Enter your msg"
          className="m-4 p-4 border-2 border-black"
        ></input>
        <button className="m-4 p-4 border-2 border-black bg-gray-200 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
