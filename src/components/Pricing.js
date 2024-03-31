import React from 'react';
import './Pricing.scss';
import PricingBlock from "../elements/PricingBlock";
import img1 from '../assets/price1.jpg';
import img2 from '../assets/price2.jpg';
import img3 from '../assets/price3.jpg';
import PricingBlockMobile from "../elements/PricingBlockMobile";
function Pricing() {
    const pricing = [
        { id: 1, color: "#FFF1F7", mobile_text_color: "#F867A6", img: img1, price: 8300, btn_color: "#E81772", lessons: 2, minutes: 60, students: 6, title: "Английский для подростков (9-12 классов)"},
        { id: 2, color: "#E5F0FF", mobile_text_color: "#84AFF9", img: img2, price: 2800, btn_color: "#4D8BF4", lessons: 2, minutes: 60, students: 6, title: "Профессиональный английский"},
        { id: 3, color: "#FFF1F7", mobile_text_color: "#F867A6", img: img3, price: 7400, btn_color: "#E81772", lessons: 2, minutes: 60, students: 6, title: "Английский для детей (1-8 классов)"},
        ];
    return (
        <div className="my_container type1" id="prices">
            <div className="bigTitle align-self-center">Цены на обучение</div>
            <div className="prices__desktop d-flex justify-content-between gap-4 align-items-stretch">
                {pricing.map(item => (
                <PricingBlock color={item.color} img={item.img} price={item.price} btn_color={item.btn_color} lessons={item.lessons} minutes={item.minutes} students={item.students} title={item.title}/>
                    ))}
            </div>
            <div className="prices__mobile d-flex flex-column fitContent justify-content-between gap-4 align-items-stretch">
                {pricing.map(item => (
                <PricingBlockMobile text_color={item.mobile_text_color} color={item.color} img={item.img} price={item.price} btn_color={item.btn_color} lessons={item.lessons} minutes={item.minutes} students={item.students} title={item.title}/>
                    ))}
            </div>
        </div>
    );
}

export default Pricing;