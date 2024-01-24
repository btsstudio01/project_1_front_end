import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import TopHeader from "../../Components/TopHeader";
import SecondHeader from "../../Components/SecondHeader";
import Pagination from "../../Components/Pagination/index";

export default function Root() {
    return (
      <>
      <div className={'flex w-full'} >
        <div id="sidebar" className="w-1/4" >
          <SideBar />
        </div>
        <div id="detail" className="w-3/4" style={{backgroundColor: 'F9FAFB'}}>
          <TopHeader />
          <div style={{paddingLeft: '30px', paddingRight: '30px'}}>
          <SecondHeader />
          <Outlet />
          <Pagination /> 
          </div>
        </div>
      </div>
      </>
    );
  }