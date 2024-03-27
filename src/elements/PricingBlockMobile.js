import React from "react";
import "./PricingBlockMobile.scss";
import verify from "../assets/verified.svg";
import Button from "react-bootstrap/Button";

const PricingBlock = ({
                          img,
                          color,
                          btn_color,
                          text_color,
                          title,
                          students,
                          minutes,
                          lessons,
                          price
                      }) => {
    return (
        <div className="pricingBlock--Mobile gap-4" style={{backgroundColor: color}}>
            <div className="d-flex justify-content-between align-items-center w-100">
                <img src={img} className="pricingBlock__image--Mobile"/>
                <div className="pricingBlock__price--Mobile" style={{color: text_color}}>{price} Р/мес</div>
            </div>
            <div className="pricingBlock__info--Mobile w-100 d-flex flex-column gap-4">
                <div className="pricingBlock__title--Mobile">{title}</div>
                <div className="buttonBlock--Mobile">
                    <Button variant="primary" className="pricingBlock__button--Mobile pe-auto"
                            style={{backgroundColor: btn_color}}>Узнать больше</Button>
                </div>
            </div>
        </div>
    );
}
export default PricingBlock;
