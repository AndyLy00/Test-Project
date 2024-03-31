import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import "./Header.scss";
import menu from "../assets/menu.svg"
import {NavDropdown} from "react-bootstrap";

function Header() {
    const [navActive, setNavActive] = useState("home");
    const [langActive, setLangActive] = useState("ru");
    const [scrollPosition, setScrollPosition] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setScrollPosition('');
            } else {
                setScrollPosition('newBackground');
            }
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            const scrollPosition = window.scrollY + 200;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollPosition >= top && scrollPosition < top + height) {
                    setNavActive(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header ${scrollPosition}`}>
            <div className="headerNav w-100 d-flex align-items-center gap-4" style={{maxWidth: 1600}}>
                <Button href="#home" variant="link" className={`${navActive === "home" ? "hide" : "nav__button"}`} onClick={() => setNavActive("home")}>Home</Button>
                <Button href="#prices" variant="link" className={`${navActive === "prices" ? "hide" : "nav__button"}`} onClick={() => setNavActive("prices")}>Prices</Button>
                <Button href="#blog" variant="link" className={`${navActive === "blog" ? "hide" : "nav__button"}`} onClick={() => setNavActive("blog")}>Blog</Button>
                <Button href="#questions" variant="link" className={`${navActive === "questions" ? "hide" : "nav__button"}`} onClick={() => setNavActive("questions")}>Questions</Button>
                <Button href="#reviews" variant="link" className={`${navActive === "reviews" ? "hide" : "nav__button"}`} onClick={() => setNavActive("reviews")}>Reviews</Button>
                <Button className="hide" variant="outline-primary">Записаться на урок</Button>
                <div className="d-flex">
                    <div className={`nav__button ${langActive === "ru" ? "nav__button--active" : ""}`} onClick={() => setLangActive("ru")}>Ru</div>
                    <div className="line">/</div>
                    <div className={`nav__button ${langActive === "en" ? "nav__button--active" : ""}`} onClick={() => setLangActive("en")}>En</div>
                    <div className="line">/</div>
                    <div className={`nav__button ${langActive === "fr" ? "nav__button--active" : ""}`} onClick={() => setLangActive("fr")}>Fr</div>
                </div>
                <NavDropdown title="Link" id="navbarScrollingDropdown" className="mobileButton">
                    <NavDropdown.Item href="#home">
                        <div className={`${navActive === "home" ? "mobileActive" : ""}`} onClick={() => setNavActive("home")}>
                            Home
                        </div>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#prices">
                        <div className={`${navActive === "prices" ? "mobileActive" : ""}`} onClick={() => setNavActive("prices")}>
                            Prices
                        </div>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#blog">
                        <div className={`${navActive === "blog" ? "mobileActive" : ""}`} onClick={() => setNavActive("blog")}>
                            Blog
                        </div>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#questions">
                        <div className={`${navActive === "questions" ? "mobileActive" : ""}`} onClick={() => setNavActive("questions")}>
                            Questions
                        </div>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#reviews">
                        <div className={`${navActive === "reviews" ? "mobileActive" : ""}`} onClick={() => setNavActive("reviews")}>
                            Reviews
                        </div>
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    );
}

export default Header;