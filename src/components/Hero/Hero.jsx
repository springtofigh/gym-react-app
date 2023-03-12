import React from 'react';
import Header from '../Header/Header';
import './Hero.css';

import hero_image from "../../assets/fit-woman.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
    const transition = {type: 'spring' , duration: 3};
    const orangeAnimation = window.innerHeight <= 768 ? true : false;
  return (
    <div className="hero">

        <div className="blur hero-blur-2"></div>
        <div className="right-h">
            <Header/> 
            {/* THE BEST AD */}
            <div className="the-best-ad">
                <motion.div
                initial={{right: orangeAnimation ? "170px" : "238px" }}
                whileInView={{right: '8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                    <span>به بهترین باشگاه ورزشی شهر، خوش اومدی</span>
            </div>

            {/* HERO HEADING */}
            <div className="hero-text">
                <div>
                    <span className="stroke-text">بدن </span>
                    <span>جذابتو</span>
                </div>
                <div>
                    <span>خودت بساز</span>
                </div>
                <div>
                    <span> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</span>
                </div>
            </div>

            {/* FIGURES */}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={34} start={12} delay="4" prefix="+" />
                    </span>
                    {/* <span>۳۴+</span> */}
                    <span>مربی باتجربه</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={987} start={800} delay="4" prefix="+" />
                    </span>
                    
                    {/* <span>۹۸۷+</span> */}
                    <span>عضو فعال</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={25} start={10} delay="4" prefix="+" />
                    </span>
                    {/* <span>۲۵+</span> */}
                    <span>برنامه بدنسازی</span>
                </div>
            </div>

            {/* HERO BUTTONS */}
            <div className="hero-buttons">
                <button className="btn">شروع کن</button>
                <button className="btn">اطلاعات بیشتر</button>
            </div>
        </div>

        <div className="blur hero-blur-2"></div>
        <div className="left-h">
            <button className="btn">عضویت</button>

            <motion.div 
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="heart-logo" />
                <span>ضربان قلب</span>
                <span>۱۱۶bpm</span>
            </motion.div>

            {/* HERO IMAGES */}
            <img src={hero_image} alt="hero" className="hero-image"/>
            <motion.img 
            initial={{left: '11rem'}}
            whileInView={{left: '20rem'}}
            transition={transition}
            src={hero_image_back} alt="hero" className="hero-image-back"/>
            {/* CALORIES */}
            <div 
            className="calories">
                <img src={Calories} alt="calories"/>
                <div>
                    <span>سوخت کالری</span>
                    <span>۲۲۰ kcal</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;