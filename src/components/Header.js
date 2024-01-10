import logo from "../images/logo-01.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const userData = useContext(UserContext);

  return (
    <div className="header flex bg-white w-full justify-between items-center px-20 shadow-md">
      <div className="logo-container w-12 my-3 transition-transform transform hover:scale-110 cursor-pointer overflow-hidden">
        <Link to="/">
          <img className="" src={logo} alt="NamasteFood logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex gap-10 font-normal">
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
            className="login-btn"
          >
            {btnNameReact}
          </button>
          <li className="font-semibold">{userData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
