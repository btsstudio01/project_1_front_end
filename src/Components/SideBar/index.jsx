import React from "react";
import styled from "styled-components";
import { Image } from "antd";
import icon_user from "../../Assets/SiderBar/UserIcon/logo.png";
import icon_selector from "../../Assets/SiderBar/Selector/chevron-selector-vertical.png";
import {
  UserDetail,
  UserIcon,
  Details,
  Name,
  Address,
  SelectorIcon,
} from "../../Uicomponents/SideBarStyles";

const MenuItemsListContainer = styled.div`
  height: auto;
`;

const MenuItems = [
  { id: 0, title: "DashBoard", greyIcon: "", whiteIcon: "" },
  { id: 1, title: "Members", greyIcon: "", whiteIcon: "" },
  { id: 2, title: "Spaces", greyIcon: "", whiteIcon: "" },
  { id: 3, title: "Message", greyIcon: "", whiteIcon: "" },
  { id: 4, title: "Ticket", greyIcon: "", whiteIcon: "" },
  { id: 5, title: "Calendar", greyIcon: "", whiteIcon: "" },
  { id: 6, title: "D", greyIcon: "", whiteIcon: "" },
  { id: 7, title: "DashBoard", greyIcon: "", whiteIcon: "" },
  { id: 8, title: "DashBoard", greyIcon: "", whiteIcon: "" },
];

const SideBar = () => {
  return (
    <div className=" h-screen w-1/6  bg-SideBar flex   justify-center">
      <UserDetail>
        <UserIcon>
          <Image src={icon_user} />
        </UserIcon>
        <Details>
          <Name>Buzz Coworking</Name>
          <Address>123 Main Street</Address>
        </Details>
        <SelectorIcon>
          <Image src={icon_selector} />
        </SelectorIcon>
        <MenuItemsListContainer>{}</MenuItemsListContainer>
      </UserDetail>
    </div>
  );
};

export default SideBar;
