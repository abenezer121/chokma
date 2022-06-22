import React from "react";
import SideBar from "../components/SideBar";
import { Layout, Menu, Breadcrumb } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Outlet } from "react-router-dom";

const Admin = () => {
   const { Header, Content, Footer, Sider } = Layout;
    return (
       <Layout>
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout className="home-layout" style={{ padding: "0 24px 24px" }}>
          <Content
            className=""
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
    )
}

export default Admin;