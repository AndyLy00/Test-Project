import "./Questions.scss";
import QuestionElement from "../elements/QuestionElement";

function Questions() {
    return (
        <div className="container type3" id="questions">
            <div className="bigTitle align-self-center">Часто задаваемые вопросы</div>
            <div className="questions__block d-grid gap-5">
                <QuestionElement question="Lorem ipsum dolor sit amet, consectetur adipiscing"/>
                <QuestionElement question="Lorem ipsum dolor sit amet, consectetur adipiscing"/>
                <QuestionElement question="Lorem ipsum dolor sit amet, consectetur adipiscing"/>
                <QuestionElement question="Lorem ipsum dolor sit amet, consectetur adipiscing"/>
            </div>
        </div>
    );
}

export default Questions;