import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar";
// import TopHeader from "../../Components/TopHeader";
import SecondHeader from "../../Components/SecondHeader";
import Pagination from "../../Components/Pagination/index";
import React, { useState } from 'react';
import NavBar from "../../Components/SideBar/TopNavBar";

export default function Root() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={'flex w-full'}>
        <div id="sidebar" className=" sm:w-1/2 lg:w-1/4  hidden sm:block ">
          <SideBar />
          {/* {show && <SideBar />} */}
        </div>
        <div id="detail" className="w-full md:w-3/4" style={{ backgroundColor: 'F9FAFB' }}>
          <div>
            <NavBar showValue={show} openSideBar={setShow} />
          </div>
          <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <SecondHeader />
            <Outlet />
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
