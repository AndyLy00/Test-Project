import "./Questions.scss";
import {Accordion} from "react-bootstrap";
import React from "react";

function Questions() {
    const questions = [
        { id: 1, question: 'Lorem ipsum dolor sit amet, consectetur adipiscing', answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu semper justo. Etiam venenatis cursus vulputate. Duis sollicitudin aliquam metus, vel ullamcorper arcu vulputateLorem ipsum dolor sit amet, consectetur  elit."},
        { id: 2, question: 'Lorem ipsum dolor sit amet, consectetur adipiscing', answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu semper justo. Etiam venenatis cursus vulputate. Duis sollicitudin aliquam metus, vel ullamcorper arcu vulputateLorem ipsum dolor sit amet, consectetur  elit."},
        { id: 3, question: 'Lorem ipsum dolor sit amet, consectetur adipiscing', answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu semper justo. Etiam venenatis cursus vulputate. Duis sollicitudin aliquam metus, vel ullamcorper arcu vulputateLorem ipsum dolor sit amet, consectetur  elit."},
        { id: 4, question: 'Lorem ipsum dolor sit amet, consectetur adipiscing', answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu semper justo. Etiam venenatis cursus vulputate. Duis sollicitudin aliquam metus, vel ullamcorper arcu vulputateLorem ipsum dolor sit amet, consectetur  elit."},
    ];
    return (
        <div className="my_container type3" id="questions">
            <div className="bigTitle align-self-center">Часто задаваемые вопросы</div>
            <div className="questions__block d-grid gap-5">
                    <Accordion>
                        {questions.map(item => (
                        <Accordion.Item eventKey={item.id}>
                            <Accordion.Header>
                                <div>
                                    <div className="questionElement__circle"></div>
                                </div>
                                <div className="questionElement__text__ParentWidth accordion__question">
                                    <div className="questionElement__text"> {item.question}</div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                {item.answer}
                            </Accordion.Body>
                        </Accordion.Item>
                            ))}
                    </Accordion>
            </div>
        </div>
    );
}

export default Questions;