import React from "react";

import Toggle from "./images/menu-01.svg";
import NavItemButton from "./images/info-circle.svg";
import Bell from "./images/bell-01.svg";
import ProfilePic from "./images/Avatar.png";
import chevronDown from "./images/chevron-down.svg";

const NavBar = ({ openSideBar, showValue, ToggleDrawer }) => {
  return (
    <div className="flex items-center justify-between text-center p-4 shadow-sm cursor-pointer">
      <div className="flex gap-3">
        <img src={Toggle} onClick={() => ToggleDrawer()} alt="" />
        <h2>Members</h2>
      </div>

      <div className="flex gap-6 items-center">
        <img src={NavItemButton} alt="" />
        <img src={Bell} alt="" />
        <img src={ProfilePic} alt="" />
        <h2 className="hidden lg:flex">Elviro Anasta</h2>
        <img src={chevronDown} alt="" className="hidden lg:flex" />
      </div>
    </div>
  );
};

export default NavBar;
