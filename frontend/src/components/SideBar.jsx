import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const SideBar = () => {
    return (
    <Sider width={200} className="site-layout-background" collapsible>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link to={"/"}>
            <span>Home</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to={"/user"}>
            <span>Users</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to={"/article"}>
            <span>Article</span>
          </Link>
        </Menu.Item>
                
        <Menu.Item key="4">
          <Link to={"/question"}>
            <span>Question</span>
          </Link>
        </Menu.Item>
                
        <Menu.Item key="5">
          <Link to={"/book"}>
            <span>Book</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    );
}

export default SideBar