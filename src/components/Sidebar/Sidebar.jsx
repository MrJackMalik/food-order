import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/svg-img/svg";
import "./sidebar.scss";
export const Sidebar = () => {
  return (
    <div className="Menu">
      <Link to="/">
        <img src={Logo} alt="logo" />
        <h1>Hello</h1>
      </Link>
    </div>
  );
};
