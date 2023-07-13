import React from "react";
import './header.css';

const logo=require(`../src/assets/logo.png`)
function Header(){
    return (
        <header>
            <div className="header-container mw-1279">
                <a href="#" className="logo logo-container">
                    <div className="logo-image-container">
                        <img src={logo} alt="logo" />
                    </div>
                    <span className="logo-text fw-700">Eset Up</span>
                </a>
                <nav>
                
                <ul className="header-ul">
                    <li><a href="#"  className="header-el active-header-el ">home</a></li>
                    <li><a href="#"  className="header-el ">about</a></li>
                    <li><a href="#" className="header-el ">service</a></li>
                    <li><a href="#" className="header-el ">price</a></li>
                    <li><a href="#" className="header-el ">testimonial</a></li>
                </ul>
            </nav>
            <div className="contact-us-wrapper">
                <a href="" className="contact-us-btn fw-700"> contact</a>
                <a href="" className="contact-us-btn fw-700 mobile-contact-us">
                    <i className="fa-solid fa-phone"></i>
                </a>
                <i className="fa-solid fa-bars"></i>
                
            </div>
            </div>
        </header>
    )
}
export default Header;