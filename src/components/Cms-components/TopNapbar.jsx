
import React from 'react'
import { Menu, Space } from "antd";
import { Link } from "react-router-dom";
const TopNavbar = () => {
  return (
    <>
      <div className="header" style={{ boxShadow: "none", padding: 0 }} >
        <Menu mode="vertical" className="justify-content-center" >
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
      </div>
    </>
  )
}

export default TopNavbar;