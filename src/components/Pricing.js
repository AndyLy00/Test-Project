import React from 'react';
import './Pricing.scss';
import PricingBlock from "../elements/PricingBlock";
import img1 from '../assets/price1.svg';
import img2 from '../assets/price2.svg';
import img3 from '../assets/price3.svg';
import PricingBlockMobile from "../elements/PricingBlockMobile";
function Pricing() {
    return (
        <div className="container type1" id="prices">
            <div className="bigTitle align-self-center">Цены на обучение</div>
            <div className="prices__desktop d-flex justify-content-between gap-2 align-items-stretch">
                <PricingBlock color="#FFF1F7" img={img1} price={8300} btn_color="#E81772" lessons={2} minutes={60} students={6} title="Английский для
подростков (9-12 классов)"/>
                <PricingBlock color="#E5F0FF" img={img2} price={2800} btn_color="#4D8BF4" lessons={2} minutes={60} students={6} title="Профессиональный
английский"/>
                <PricingBlock color="#FFF1F7" img={img3} price={7400} btn_color="#E81772" lessons={2} minutes={60} students={6} title="Английский для
детей (1-8 классов)"/>
            </div>
            <div className="prices__mobile d-flex flex-column fitContent justify-content-between gap-4 align-items-stretch">
                <PricingBlockMobile text_color="#F867A6" color="#FFF1F7" img={img1} price={8300} btn_color="#E81772" lessons={2} minutes={60} students={6} title="Английский для
подростков (9-12 классов)"/>
                <PricingBlockMobile text_color="#84AFF9" color="#E5F0FF" img={img2} price={2800} btn_color="#4D8BF4" lessons={2} minutes={60} students={6} title="Профессиональный
английский"/>
                <PricingBlockMobile text_color="#F867A6" color="#FFF1F7" img={img3} price={7400} btn_color="#E81772" lessons={2} minutes={60} students={6} title="Английский для
детей (1-8 классов)"/>
            </div>
        </div>
    );
}

export default Pricing;