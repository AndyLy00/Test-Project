import React from 'react';
import "./QuestionElement.scss";
import plus from "../assets/plus.svg";

const QuestionElement = ({
                             question,
                             text
                         }) => {
    return (
        <div className="questionElement">
            <div className="d-flex gap-5 align-items-center">
                <div className="questionElement__circle"></div>
                    <div className="questionElement__text">{question}</div>
                <img src={plus} className="questionElement__plus"></img>
            </div>
        </div>
    );
}

export default QuestionElement;