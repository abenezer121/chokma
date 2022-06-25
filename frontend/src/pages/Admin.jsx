import React from "react";
import SideBar from "../components/SideBar";
import { Layout, Menu, Breadcrumb } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Outlet } from "react-router-dom";

const Admin = () => {
   const { Header, Content, Footer, Sider } = Layout;
    return (
      
      <div>
        <Outlet />
      </div>
            
            
         
    )
}

export default Admin;