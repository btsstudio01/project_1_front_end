import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar";

export default function Root() {
    return (
      <>
      <div className={'flex w-full'}>
        <div id="sidebar" className="w-1/4">
          <SideBar />
        </div>
        <div id="detail" className="w-3/4" >
          <Outlet />
        </div>
      </div>
      </>
    );
  }