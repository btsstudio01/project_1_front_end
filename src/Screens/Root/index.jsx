import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import React, { useState } from 'react';

import NavBar from "../../Components/SideBar/TopNavBar";

export default function Root() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={'flex w-full'}>
        <div id="sidebar" className=" sm:w-1/2 lg:w-1/4  hidden sm:block ">
          <SideBar />
          {show && <SideBar />}
        </div>
        <div id="detail" className="w-3/4" >
          <div>
            <NavBar showValue={show} openSideBar={setShow} />
          </div>
          {/* <button className="md:hidden" onClick={() => setShow(!show)}>Toggle Show</button> */}
         
          <Outlet />
        </div>
      </div>
    </>
  );
}
