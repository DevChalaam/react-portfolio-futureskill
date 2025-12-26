import React, { useState } from 'react'
import style from './Hero.module.css'
import { FaGithub, FaLinkedinIn, FaFacebookF  } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={style.hero_wrapper}>
      <div className={style.hero_container}>
        <div className={style.hero_con}>
            <div className={style.hero_info}>
                <p className={style.text_1}>Hi, it's me</p>
                <h3 className={style.text_2}>John Doe</h3>
                <p className={style.text_3}>
                    <span style={{ marginRight: '10px' }}>I'm a</span> 
                    <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Font-end Developer',
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Web Developer',
                      1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    />
                </p>
                <p className={style.text_4}>
                    Lorem ipsum is a dummy or placeholder text commonly used in graphic design
                </p>
                <ul className={style.hero_social}>
                    <li><a href="#"><FaGithub /></a></li>
                    <li><a href="#"><FaLinkedinIn /></a></li>
                    <li><a href="#"><FaFacebookF /></a></li>
                </ul>
            </div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              <div className={style.hero_img}></div>
            </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Hero
