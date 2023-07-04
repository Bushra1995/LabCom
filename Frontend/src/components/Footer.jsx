import React from "react";
import '../Css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BsTelephoneForwardFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import logo from "../img/logo/logo.png";
import capremovebg from "../img/accreditations/capremovebg.png"
import cdclogo from "../img/accreditations/cdclogo.png"
import hcacremovebg from "../img/accreditations/hcacremovebg.png"
import ISOremovebg from "../img/accreditations/ISOremovebg.png"
import JASremovebg from "../img/accreditations/JASremovebg.png"

const Footer = () => {

    return (
        <>
{/* ========================= footer start ========================= */}

<footer
id="footer"
className="footer pt-40 img-bg"
>
<div className="container">
    <div className="footer-widget-wrapper">
        <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="footer-widget mb-30">
                    <h4>Quick Link</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#">House Call Service</a>
                        </li>
                        <li>
                            <a href="#">Lab Test</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6">
                <div className="footer-widget mb-20">
                    <a href="index.html" className="logo">
                        <img
                            id="footerImg"
                            src={logo}
                            alt="logo"
                        />
                    </a>
                    <p>
                        LAB COM offers you a group of medical services that connect you
                        with your doctor and laboratory in the fastest way possible, to
                        relieve patients of the trouble of moving from one place to
                        another.
                    </p>
                    <div className="footer-social-links">
                        <ul>
                            <li>
                                <a href="https://github.com/Bushra1995">
                                <BsGithub className="icons"/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:bushra95ga@gmail.com">
                                <TfiEmail className="icons" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/bushra-abu-rahmeh-686b38165">
                                <BsLinkedin className="icons"/>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+962786795067">
                                <BsTelephoneForwardFill className="icons" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-12 col-md-7">
                <div className="footer-widget mb-30">
                    <h4>Our Accreditations</h4>
                    <div className="map-canvas">
                        <img
                            className="accreditations"
                            src={capremovebg}
                            alt=""
                        />
                        <img
                            className="accreditations"
                            src={cdclogo}
                            alt=""
                        />
                        <img
                            className="accreditations"
                            src={hcacremovebg}
                            alt=""
                        />
                        <img
                            className="accreditations"
                            src={ISOremovebg}
                            alt=""
                        />
                        <img
                            className="accreditations"
                            src={JASremovebg}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright-area">
        <p className="col-lg-11 mb-0 text-center">
            Designed and Developed By{" "}
            <a href="https://github.com/Bushra1995" rel="nofollow">
                BUSHRA
            </a>
        </p>
    </div>
</div>
</footer>
{/* ========================= footer end ========================= */}
</>
    )
}

export default Footer;