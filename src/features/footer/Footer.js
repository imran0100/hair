// Footer.js
import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt,FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiSendPlaneLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="footer-container container">
      <div className="footer-item">
        <img src='https://hairsncares.com/assets/img/footer-logo.png'/>
        <div className='icon-footer'>
            <FaMapMarkerAlt size={35}/>
            <p>HairsnCares.com, 101, Kane Plaza, Above Union Bank, Near Evershine Mall, Mindspace, Malad West, Mumbai, Maharashtra, 400064</p>
        </div>
        <div className='icon-footer al'>
<FaPhone size={14}/>
<p>123456789</p>
        </div>
        <div className='icon-footer al'>
            <IoMdMail />
            <p>https://hairsncares.com</p>
        </div>


      </div>
      <div className="footer-item">
        <h3>PRODUCT</h3>
       <p>ALL PRODUCTS</p>
      </div>
      <div className="footer-item">
        <h3>COMPANY</h3>
        <p className='com-con'>HOME</p>
        <p className='com-con'>ABOUT</p>
        <p className='com-con'>OUR SPECIALIST</p>
        <p className='com-con'>CONTACT US</p>

      </div>
      <div className="footer-item">
        <h3>NEWSLETTER</h3>
        <p className='com-con'>Subscribe to our weekly Newsletter and receive updates via email</p>
        <form action="#">
                                    <input type="email" name="news_email" id="news_email" placeholder="hairsncares@gmail.com"/>
                                   
                                    <div class="btn-footer">
                                        <button class="theme-btn-1 btn-foo" type="submit" value="news_submit" id="news_submit" disabled="disabled"><RiSendPlaneLine size={20}/></button>
                                    </div>
                                    
                                </form>
      </div>
    </footer>
  );
};

export default Footer;
