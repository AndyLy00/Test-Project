import React from 'react';
import "./Review.scss";
import avatar from "../assets/avatar.jpg";
import message from "../assets/message2.png";
import {Carousel} from "react-bootstrap";

function Review() {
    const reviews = [
        { id: 1, name: 'Vladimir Svetchuk', job: "Student", avatar: avatar, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu semper justo. Etiam venenatis cursus vulputate. Duis sollicitudin aliquam metus, vel ullamcorper arcu vulputateLorem ipsum dolor sit amet, consectetur  elit. " },
        { id: 2, name: 'Vladimir Svetchuk', job: "Student", avatar: avatar, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu semper justo. Etiam venenatis cursus vulputate. Duis sollicitudin aliquam metus, vel ullamcorper arcu vulputateLorem ipsum dolor sit amet, consectetur  elit. " },
        { id: 3, name: 'Vladimir Svetchuk', job: "Student", avatar: avatar, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu semper justo. Etiam venenatis cursus vulputate. Duis sollicitudin aliquam metus, vel ullamcorper arcu vulputateLorem ipsum dolor sit amet, consectetur  elit. " },
    ];
    return (
            <div className="my_container type2" id="reviews">
                <div className="bigTitle align-self-center">Отзывы</div>
                <div className="review__block">
                    <Carousel>
                        {reviews.map(item => (
                            <Carousel.Item>
                                <div className="review__info position-relative d-flex gap-4">
                                    <img alt="" src={avatar} className="review__avatar"></img>
                                    <div className="bigTitle review__decoration--Mobile">"</div>
                                    <div className="review__text">
                                        <div className="name">{item.name}</div>
                                        <div className="job" style={{marginTop: 10}}>{item.job}</div>
                                        <div className="description" style={{marginTop: 30}}> {item.review} </div>
                                    </div>
                                    <div className="bigTitle review__decoration">"</div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <img alt="" className="message" src={message}/>
            </div>
    );
}

export default Review;