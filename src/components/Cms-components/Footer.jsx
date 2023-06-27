import React from "react";
import { Row, Col, Space } from "antd";
import { Link } from "react-router-dom";
import { wlogo, } from "../../../utils/ImagePath";
import { Img } from "../../ui-elements/ImageRepo";
import { CardHeadText } from "../../ui-elements/TextRepo";
import "../../Cms-Pages/Cms.scss";
import { MdOutlineLocationOn } from "react-icons/md";
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
const Footer = () => {
  return (

    <div className="footer-section">
      <div className="container">
        <Row className="py-5">
          <Col lg={6} xs={24} className="" md={6}>
            <Link to="/"><Img children={wlogo} alt="" className="mb-4" /></Link>
            {/* <Img children={siteLogo} alt="" className='mb-2' /> */}
            <p className="footer-text mb-4 me-2">
              For everyone to make trading faster and reliable by using this
              digital escrow platform.
            </p>
            <Space>
              <Link to="share__link  share__link--facebook" className="link d-block mb-3 me-2"><FiFacebook /></Link>
              <Link to="/home" className="link d-block mb-3 me-2"><FiTwitter /></Link>
              <Link to="/home" className="link d-block mb-3 me-2"><FiInstagram /></Link>
              <Link to="/home" className="link d-block mb-3 me-2"><FiLinkedin /></Link>
            </Space>
          </Col>
          <Col lg={6} md={6} xs={12} className="mb-3">
            <CardHeadText children='Useful Links' />
            <Link to="/home" className="link d-block mb-3">
              Home
            </Link>
            <Link to="/contact-us" className="link d-block mb-3">
              Contact Us
            </Link>
            <Link to="/features" className="link d-block mb-3">
              Features
            </Link>
            <Link to="/about-us" className="link d-block mb-3">
              About Us
            </Link>
          </Col>
          <Col lg={6} md={6} xs={12}>
            <CardHeadText children='Useful Links' />
            <Link to="/privacy-policy" className="link d-block mb-3">
              Privacy Policy
            </Link>
            <Link to="/escrow-terms-and-conditions" className="link d-block mb-3">
              Escrow Terms & Conditions
            </Link>
            <Link to="/terms-and-condition" className="link d-block mb-3">
              General Terms & Conditions
            </Link>
            <Link to="/enterprise" className="link d-block mb-3">
              Enterprise
            </Link>
          </Col>
          <Col lg={6} md={6} xs={24}>
            <CardHeadText children='Address' />
            <p className="footer-text d-block mb-3"><MdOutlineLocationOn className="me-2" />Trustin Limited, 512, 11th floor, AI Sarab Tower, ADGM Square, AI Maryah Island, Abu Dhabi-UAE</p>
            <p className="footer-text d-block mb-3"><PhoneOutlined className="me-2" />+971-551300075 </p>
            <p className="footer-text d-block mb-3"><MailOutlined className="me-2" />hello@trustintrade.ae</p>
          </Col>
        </Row>

        <p className="text-center mb-0 text-white py-3">
          {`@copyrights ${new Date().getFullYear()} All rights reserved by Trustin Trade`}
        </p>
      </div>
    </div>
  )
}

export default Footer