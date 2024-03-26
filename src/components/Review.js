import React from 'react';
import "./Review.scss";
import arrow from "../assets/arrow.svg";
import avatar from "../assets/avatar.svg";
import message from "../assets/message2.png";

function Review() {
    return (
            <div className="container type2">
                <div className="bigTitle align-self-center">Отзывы</div>
                <div className="review__block">
                    <div className="review__element">
                        <img src={arrow} className="arrow arrow--left"></img>
                        <div className="review__info">
                            <img src={avatar} className="avatar"></img>
                            <div className="review__text">
                                <div className="name">Vladimir Svetchuk</div>
                                <div className="job" style={{marginTop: 10}}>Student</div>
                                <div className="description" style={{marginTop: 30}}>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu semper justo. Etiam venenatis cursus vulputate. Duis sollicitudin aliquam metus, vel ullamcorper arcu vulputateLorem ipsum dolor sit amet, consectetur  elit. </div>
                            </div>
                            <div className="bigTitle review__decoration">"</div>
                        </div>
                        <img src={arrow} className="arrow arrow--right"></img>
                    </div>
                    <div className="d-flex gap-2 justify-content-center" style={{marginTop: 80}}>
                        <div className="circle circle--active"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>
                <img className="message" src={message}/>
            </div>
    );
}

export default Review;