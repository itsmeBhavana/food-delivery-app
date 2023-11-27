import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  //subscribe using selector
  const cartItems = useSelector((store) => store.cart.items);
  const handleLoginState = () => {
    setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
  };
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex h-28 justify-between bg-green-100 shadow-lg mx-2 my-2 items-center">
      <div className="logo">
        <img className="w-28" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex">
        <ul className="flex gap-8 mx-8 text-md">
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/groceries">Groceries</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="font-bold px-4">{loggedInUser}</li>
          <button onClick={handleLoginState}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
