import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title" id="about-section">About</div>
          <div className="text">
            Welcome to ECOM STORE, your trusted destination for all your
            accessories needs. At ECOM STORE, we believe in delivery the best to
            our customers. Our passion for accessories drives us to bring you
            the highest quality products, exceptional customer service, and an
            unparalleled shopping experience. Your happiness is our top
            priority, and we go above and beyond to ensure a seamless shopping
            experience. Our secure payment process, reliable shipping options,
            and hassle-free returns make your satisfaction guaranteed. Thank you
            for choosing ECOM STORE. Join us in exploring the world of
            accessories and experience the difference with us.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
             Jharua More, Near B.ed College, Siliguri, West Bengal, 734011
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 7864884128</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: indrajeetsingh7319@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            ECOM STORE 2023 CREATED BY INDRAJEET. PREMIUM E-COMMERCE SOLUTIONS.
          </span>
          <img src={Payment} alt=""/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
