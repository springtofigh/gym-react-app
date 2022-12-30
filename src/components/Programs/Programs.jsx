import React from 'react';
import './Programs.css';
import rightArrow from '../../assets/rightArrow.png'

import { programsData } from './../../data/programsData';

const Programs = () => {
  return (
    <div className="programs" id="programs">
        {/* header */}
<div className="programs-header">
        <span className="stroke-text"> یافتن بهترین </span>
        <span> برنامه‌های </span>
        <span className="stroke-text"> تناسب اندام </span>
</div>
        <div className="program-categories">
            {programsData.map((program) => (
                <div className="category" key={program.id}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>همین حالا عضو شو</span>
                        <img src={rightArrow} alt="arrow" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs