import React from 'react';
import './Plans.css';
import whiteTick from "../../assets/whiteTick.png";


import { plansData } from './../../data/plansData';

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header">
            <span className="stroke-text">سفرتو </span>
            <span> با  ما </span>
            <span className="stroke-text">شروع کن </span>
        </div>
        {/* plans card */}
        <div className="plans">
        {plansData.map((plan) => (
            <div className="plan" key={plan.id}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>{plan.price} تومان</span>
                <div className="features">
                    {plan.features.map((feature, i) => (
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>
                <div>
                    <span>
                    دیدن اطلاعات بیشتر
                    </span>
                </div>
                    <button className="btn">عضویت</button>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Plans