import React from 'react';
import './Reasons.css';

import image1 from "../../assets/fit-woman2.jpg";
import image2 from "../../assets/fit-woman6.jpg";
import image3 from "../../assets/fit-woman9.jpg";
import image4 from "../../assets/fit-woman11.jpg";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import addidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";


const Reasons = () => {
  return (
    <div className="reasons" id="resons">
        <div className="right-r">
            <img src={image1} alt="athlete1" />
            <img src={image2} alt="athlete2" />
            <img src={image3} alt="athlete3" />
            <img src={image4} alt="athlete4" />
        </div>
        <div className="left-r">
            <span>دلایل انتخاب باشگاه فیت کلاب برای بانوان</span>

            <div>
                <span className='stroke-text'>چرا </span>
                <span>انتخاب ما؟</span>
                </div>

                <div className="left-details">
                <div>
                <img src={tick} alt="" />
                <span>بیش از ۵۰  مربی با تجربه</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>تمرین کردن با سرعت و دقت</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>یک برنامه رایگان برای اعضای جدید</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>شرکای ورزشی حرفه‌ای</span>
            </div>
        </div>

        <span style={{color: "var(--gray)",fontWeight: "normal"}}>
            همکاران ما
        </span>


        <div className="partners">
            <img src={nike} alt="نایک" />
            <img src={nb} alt="ان بی" />
            <img src={addidas} alt="آدیداس" />
            
            </div>
        </div>
    </div>
  )
}

export default Reasons