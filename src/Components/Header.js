import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg  mb-2">
      <div className="logoContainer">
        <img className="w-36" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 ">Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 hover:font-bold  active:text-red-600">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 hover:font-bold  active:text-red-600">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4 hover:font-bold  active:text-red-600 ">
            <Link to={"/contact"}>Contact Us</Link>
          </li>

          <li className="px-4 hover:font-bold  active:text-red-600">
            <Link to={"/groceries"}>Groceries</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
