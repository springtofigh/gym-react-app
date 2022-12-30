import React from 'react';
import './Testimonials.css';
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

import { testimonialsData } from '../../data/testimonialsData';
import { useState } from 'react';

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const length = testimonialsData.length;
    const transition = {type: 'spring' , duration: 3};

  return (
    <div className="testimonials">
        <div className="right-t">
            <span>نظرات ورزشکاران مشهور</span>
            <span className='stroke-text'> سایر ورزشکاران </span>
            <span> درمود ما چه میگویند؟ </span>
            <motion.span
            key={selected}
            initial={{ opacity:0 , x:100 }}
            animate={{ opacity:1 , x:0 }}
            exit={{ opacity:0 , x:-100 }}
            transition={transition}
            >
                {testimonialsData[selected].review}
            </motion.span>
            <div>
                <span style={{color: "var(--orange)"}}>
                {testimonialsData[selected].name}
            </span>
            <span>
                {testimonialsData[selected].status}
            </span>
            </div>
            
        </div>
        <div className="left-t">
            <motion.div
            initial={{ opacity:0 , x: -100 }}
            whileInView={{ opacity:1 , x: 0 }}
            transition={{...transition, duration: 2}}
            ></motion.div>
            <motion.div
            initial={{ opacity:0 , x: 100 }}
            whileInView={{ opacity:1 , x: 0 }}
            transition={{...transition, duration: 2}}
            ></motion.div>


            <motion.img
            initial={{ opacity:0 , x:100 }}
            animate={{ opacity:1 , x:0 }}
            exit={{ opacity:0 , x:-100 }}
            transition={transition}
            key={selected} src={testimonialsData[selected].image} alt="" />

            <div className="arrows">
                <img 
                onClick={() => {
                    selected === length - 1 ?
                    setSelected(0) :
                    setSelected((prev) => prev + 1)
                }}
                src={rightArrow} alt="" />
                <img 
                onClick={() => {
                    selected === 0 ? 
                setSelected(length - 1) :
                setSelected((prev) => prev - 1)
                }}
                src={leftArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials