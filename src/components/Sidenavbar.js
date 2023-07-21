import React from "react";
// import profile from "./assets/Profileimg1.jpg";
import logo from '../assets/logo 2.png';
import { Link } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";

export default function Sidenavbar() {
  // const viewHeight = window.outerHeight;

  const menus = [
    { name: "Dashboard", icon: MdOutlineDashboard },
    { name: "Registration", link: "/CustomerDetailes", icon: GiArchiveRegister },
  
  ];

  return (
    
    <div className='sidebar'>
    <div className='logocolor'>
      <img src={logo} alt='logo'/>
    </div>
   
 
       
        {menus?.map((menu, i) => (
          <Link className="sidebar-Link" to={menu?.link}>
            <div className="sidebarhedsty">
            <div>{React.createElement(menu?.icon, { size: "25" })}</div>
            <div>
            <text className="sidebartext">{menu?.name}</text>
            </div>
            </div>
          </Link>
        ))}

      </div>

      // <div style={{ marginTop: 40, marginBottom: 30, marginLeft: 5 }}>
      //   <text style={{ fontSize: 15, fontWeight: 400, color: "#ffffff" }}>
      //     Version 1.0{" "}
      //   </text>
      // </div>
    
  );
}
