import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar";
// import TopHeader from "../../Components/TopHeader";
import SecondHeader from "../../Components/SecondHeader";
import Pagination from "../../Components/Pagination/index";
import React, { useState } from "react";
import NavBar from "../../Components/SideBar/TopNavBar";
import Drawer from "react-modern-drawer";

export default function Root() {
  const [show, setShow] = useState(false);
  const [isSideBarOpen, setIsSideBarOpened] = useState(false);

  const ToggleDrawer = () => {
    setIsSideBarOpened((prevState) => !prevState);
  };

  return (
    <>
      <div className={"flex w-full"}>
        <div
          id="sidebar"
          className=" sm:w-1/2 lg:w-1/4   sm:block "
          style={{
            width: isSideBarOpen ? "300px" : "0",
            transition: "all .3s",
          }}
        >
          <SideBar
            setIsSideBarOpened={setIsSideBarOpened}
            isSideBarOpen={isSideBarOpen}
          />
          {/* {show && <SideBar />} */}
        </div>
        <div
          id="detail"
          className="w-full md:w-3/4 flex-grow"
          style={{ backgroundColor: "F9FAFB" }}
        >
          <div>
            <NavBar
              showValue={show}
              openSideBar={setShow}
              ToggleDrawer={ToggleDrawer}
            />
          </div>
          <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <Outlet />
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
