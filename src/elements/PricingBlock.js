import React from "react";
import "./PricingBlock.scss";
import verify from "../assets/verified.svg";
import Button from "react-bootstrap/Button";

const PricingBlock = ({
                          img,
                          color,
                          btn_color,
                          title,
                          students,
                          minutes,
                          lessons,
                          price
                      }) => {
    return (
        <div className="pricingBlock" style={{backgroundColor: color}}>
            <img src={img} className="pricingBlock__image"/>
            <div className="pricingBlock__info">
                <div className="pricingBlock__title">{title}</div>
                <div className="pricingBlock__text">
                    <div className="pricingBlock__element">
                        <img src={verify}/>
                        <div>Количество студентов: {students}</div>
                    </div>
                    <div className="pricingBlock__element">
                        <img src={verify}/>
                        <div>Минут: {minutes}</div>
                    </div>
                    <div className="pricingBlock__element">
                        <img src={verify}/>
                        <div>Уроков в неделю: {lessons}</div>
                    </div>
                </div>
                <div className="buttonBlock">
                    <div className="fitContent">
                        <div className="buttonShadow" style={{borderColor: btn_color}}></div>
                        <Button variant="primary" className="pricingBlock__button" style={{backgroundColor: btn_color}}>{price} Р/мес</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PricingBlock;
