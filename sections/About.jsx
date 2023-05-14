'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
      Hi, I'm
      <span className="font-extrabold text-white"> Yevhen</span>
      ! I'm a final year
      <span className="font-extrabold text-white"> Honors Computing Science </span>
      student at the
      <span className="font-extrabold text-white"> University of Alberta</span>
      , with
      <span className="font-extrabold text-white"> over a year </span>
       of professional experience as a
      <span className="font-extrabold text-white"> software developer</span>
      . I am passionate about coding and constantly seeking new knowledge and skills to stay up-to-date in this rapidly-evolving field. In my downtime, I enjoy watching anime and staying active at the gym.

      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />

    </motion.div>
  </section>
);

export default About;


