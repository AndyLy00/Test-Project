import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import "./Header.scss";
import menu from "../assets/menu.svg"

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
                <Button href="#home" variant="link" className={`${navActive === "home" ? "" : "nav__button"}`} onClick={() => setNavActive("home")}>Home</Button>
                <Button href="#prices" variant="link" className={`${navActive === "prices" ? "" : "nav__button"}`} onClick={() => setNavActive("prices")}>Prices</Button>
                <Button href="#blog" variant="link" className={`${navActive === "blog" ? "" : "nav__button"}`} onClick={() => setNavActive("blog")}>Blog</Button>
                <Button href="#questions" variant="link" className={`${navActive === "questions" ? "" : "nav__button"}`} onClick={() => setNavActive("questions")}>Questions</Button>
                <Button href="#reviews" variant="link" className={`${navActive === "reviews" ? "" : "nav__button"}`} onClick={() => setNavActive("reviews")}>Reviews</Button>
                <Button variant="outline-primary">Записаться на урок</Button>
                <div className="d-flex">
                    <div className={`nav__button ${langActive === "ru" ? "nav__button--active" : ""}`} onClick={() => setLangActive("ru")}>Ru</div>
                    <div className="line">/</div>
                    <div className={`nav__button ${langActive === "en" ? "nav__button--active" : ""}`} onClick={() => setLangActive("en")}>En</div>
                    <div className="line">/</div>
                    <div className={`nav__button ${langActive === "fr" ? "nav__button--active" : ""}`} onClick={() => setLangActive("fr")}>Fr</div>
                </div>
                <img alt="" src={menu} className="mobileButton"/>
            </div>
        </div>
    );
}

export default Header;