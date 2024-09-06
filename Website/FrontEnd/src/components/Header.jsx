import React, { useState } from "react";
import ButtonBlack from "../button/ButtonBlack";
import ButtonWhite from "../button/ButtonWhite";
import { Link } from "react-router-dom";

const Header = () => {
  const [NavLinks, setNavLinks] = useState([
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
    { title: "Services", link: "/services" },
  ]);
  return (
    <>
      <div>
        <div className="flex justify-between bg-white shadow-xl container w-3/5 items-center px-4 py-3 rounded-2xl fixed top-3 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center">
            <img className="w-9 pr-2 h-fit" src="src/assets/images/logo.png" alt="" />
            <h6>{"DoF3aa"}</h6>
          </div>
          <div>
            <nav>
              <ul className="flex gap-5">
                {NavLinks.map((link) => (
                  <li key={link.link}>
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex gap-2">
            <Link to="/login"> <ButtonWhite Text="Login"/> </Link>
            <ButtonBlack Text="Register" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;