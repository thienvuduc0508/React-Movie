import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../content-wrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="footer__menu">
                    <li className="footer__menu-item">Terms Of Use</li>
                    <li className="footer__menu-item">Privacy-Policy</li>
                    <li className="footer__menu-item">About</li>
                    <li className="footer__menu-item">Blog</li>
                    <li className="footer__menu-item">FAQ</li>
                </ul>
                <div className="footer__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="footer__social">
                    <span className="footer__social-icon">
                        <FaFacebookF />
                    </span>
                    <span className="footer__social-icon">
                        <FaInstagram />
                    </span>
                    <span className="footer__social-icon">
                        <FaTwitter />
                    </span>
                    <span className="footer__social-icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;