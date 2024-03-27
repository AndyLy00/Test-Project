import React, {useState} from 'react';
import "./QuestionElement.scss";
import plus from "../assets/plus.svg";

const QuestionElement = ({
                             question,
                             text
                         }) => {
    const [display, setDisplay] = useState(false);
    return (
        <div className="questionElement">
            <div className="d-flex gap-5 align-items-center">
                <div className="questionElement__circle"></div>
                    <div className="questionElement__text">{question}</div>
                <img src={plus} className="questionElement__plus"  onClick={() => setDisplay(!display)}></img>
            </div>
            <div className={`questionDescription ${display === true ? "" : "textDisplayNone"}`}>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu semper justo. Etiam venenatis cursus vulputate. Duis sollicitudin aliquam metus, vel ullamcorper arcu vulputateLorem ipsum dolor sit amet, consectetur  elit.
            </div>
        </div>
    );
}

export default QuestionElement;