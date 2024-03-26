import React from 'react';
import "./MainPage.scss";
import back from "../assets/mainpageBackground.svg"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import lang from '../assets/eng.svg';
import hello from '../assets/hello.svg'
import logo from '../assets/logo.svg';

function MainPage() {
    return (
        <div className="mainPage d-flex">
            <div className="mainPage__text d-flex justify-content-center align-items-center">
                <div className="textPosition">
                    <img src={logo} className="logo"/>
                    <div className="bigTitle">
                        Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className="mainPage__description">
                        Consectetur adipiscing elit integer bibendum
                    </div>
                </div>
            </div>
            <div className="mainPage__formSection">
                <img src={back} className="backImg"/>
                <div className="form__position">
                    <img src={lang} className="lang"/>
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
                    <img src={hello} className="hello"/>
                </div>

            </div>
        </div>
    );
}

export default MainPage;
