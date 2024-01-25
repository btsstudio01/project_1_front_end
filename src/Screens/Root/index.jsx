import { Outlet } from "react-router-dom";
import { ReactComponent as LifeBuoy } from '../../Assets/SiderBar/Menu/GreyIcons/lifebuoy.svg'
import { ReactComponent as Arrow } from '../../Assets/SiderBar/Menu/GreyIcons/arrow.svg'
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
          className=" sm:w-1/2 lg:w-1/4 sm:block "
          style={{
            width: isSideBarOpen ? "300px" : "0",
            transition: "all .3s",
          }}
        >
          <SideBar
            setIsSideBarOpened={setIsSideBarOpened}
            isSideBarOpen={isSideBarOpen}
          />
          <section
            style={{
              padding: "12px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              padding: "20px",
              backgroundColor: "#344054",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
              <LifeBuoy
                width="30px"
                height="30px"
                style={{ width: 25, height: 25 }}
              />
              <span style={{ color: "#969DA9" }}>Helpdesk</span>
            </div>
            <Arrow style={{ marginLeft: "auto", width: 25, height: 20 }} />
          </section>
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
          {/* <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <SecondHeader ToggleDrawer={ToggleDrawer} />
            <Outlet />
            <Pagination />
          </div> */}
        </div>

      </div>
    </>
  );
}
