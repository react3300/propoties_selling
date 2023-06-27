import React, { useState } from "react";
import { Layout, Menu, Drawer, Space } from "antd";
import { Link } from "react-router-dom";
// import { Img } from "../../ui-elements/ImageRepo";
// import { siteLogo } from "../../../utils/ImagePath";
import { MenuFoldOutlined } from "@ant-design/icons";
import { logo } from "../../utils/ImagePath";
import TopNavbar from "./TopNapbar";


const Header = () => {
    const { Header } = Layout;
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    return (
        <section className="sections-header bg-white py-0">
            <div className="container">
                <Header className="header p-0 d-flex justify-content-between ">
                    <Link to="/" className="d-inline-flex align-items-center">
                        <img
                            src={logo}
                            alt="logo"
                            className=""
                            width={100}
                        />
                    </Link>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        className="d-lg-block d-none"
                    >
                        <Menu.Item key="1">
                            <Link to="/home" className="font500" style={{ color: "red" }}>Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/about" className="font500" style={{ color: "red" }}> About Us</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/propoties" className="font500" style={{ color: "red" }}> Properpties </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/contact" className="font500" style={{ color: "red" }}> Contact Us </Link>
                        </Menu.Item>
                    </Menu>

                    <Space type="primary" onClick={showDrawer}>
                        <MenuFoldOutlined className="d-block d-lg-none" />
                    </Space>
                    <Drawer
                        height={350}
                        open={visible}
                        placement="top"
                        onClose={() => setVisible(false)}
                    >
                       
                       <TopNavbar />
                    </Drawer>
                </Header>
            </div>
        </section>
    );
};

export default Header;
