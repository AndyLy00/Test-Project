import React from 'react';
import "./MainPage.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import lang from '../assets/eng.svg';
import hello from '../assets/hello.svg'
import logo from '../assets/logo.png';
import v1 from '../assets/mainpagev1.svg';
import v2 from '../assets/mainpagev2.svg';
import v3 from '../assets/mainpagev3.svg';
import waves from '../assets/mainpageLine.svg';

function MainPage() {
    return (
        <div className="mainPage d-flex section" id="home">
            <div className="mainPage__text d-flex justify-content-center align-items-center">
                <div className="textPosition">
                    <img alt="" src={logo} className="logo"/>
                    <div className="bigTitle text-start">
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className="mainPage__description">
                        Consectetur adipiscing elit integer bibendum
                    </div>
                    <div className="mainPage__mobileButton position-relative">
                        <img alt="" src={lang} className="lang2"/>
                        <Button variant="primary" type="submit" className="mainPage__text__button">
                            Записаться
                        </Button>
                        <img alt="" src={hello} className="hello2"/>
                    </div>
                </div>
            </div>
            <div className="mainPage__formSection bg-my-pink">
                <img alt="" src={v1} className="v1"/>
                <img alt="" src={v2} className="v2"/>
                <img alt="" src={v3} className="v3"/>
                <img alt="" src={waves} className="waves"/>
                <img alt="" src={lang} className="lang"/>
                <img alt="" src={hello} className="hello"/>
                <div className="form__position">
                    <div className="mainPage__form d-flex flex-column justify-content-center gap-4">
                        <div className="form__title align-self-center">Записаться</div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email or phone number</Form.Label>
                                <Form.Control type="email" placeholder="lorem@mail.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="*****" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Записаться на бесплатный пробный урок
                            </Button>
                            <div className="form__forgot">Forgot your password?</div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
