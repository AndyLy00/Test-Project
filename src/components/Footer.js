import React, {useState} from 'react';
import "./Footer.scss";
import Button from "react-bootstrap/Button";
import shadow from "../assets/footerShadow.svg";
import logo from "../assets/logoFooter.png";
function Footer() {
    return (
        <div className="footer">
            <div className="footer__top d-flex justify-content-center">
                <div className="footer__info type1 d-flex justify-content-between w-100 gap-2">
                    <div className="footer__logo">
                        <img src={logo}/>
                    </div>
                    <div className="footer__text d-flex justify-content-end">
                        <div className="footer__position__text d-flex flex-column">
                            <div className="footer__nav d-flex gap-4">
                                <Button href="#home" variant="link" className="nav__button">Home</Button>
                                <Button href="#prices" variant="link" className="nav__button">Prices</Button>
                                <Button href="#blog" variant="link" className="nav__button">Blog</Button>
                                <Button href="#questions" variant="link" className="nav__button">Questions</Button>
                                <Button href="#reviews" variant="link" className="nav__button">Reviews</Button>
                                <Button variant="outline-primary">Записаться на урок</Button>
                            </div>
                            <div className="footer__phone">
                                <div>+373 67-74-27-77</div>
                                <div>+373 67-74-27-77</div>
                            </div>
                            <div className="footer__location">
                                <div className="footer__location__title fw-bold">Как нас найти:</div>
                                <div className="footer__location__address">Московский проспект 18</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__shadow">
                <img src={shadow}/>
            </div>
        </div>
    );
}

export default Footer;