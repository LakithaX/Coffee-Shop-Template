"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import FrameComponent1 from "../components/frame-component1";
import CategoriesContainer from "../components/categories-container";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent from "../components/frame-component";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const WebsitesDesign: NextPage = () => {
  return (
    <div className="w-full relative bg-[#f1f0ee] overflow-hidden flex flex-col items-start pt-[3.437rem] px-[0rem] pb-[0rem] box-border isolate gap-[11.125rem] leading-[normal] tracking-[normal] mq900:gap-[2.75rem] mq1350:gap-[5.563rem]">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          className="w-full h-[62.5rem] absolute !!m-[0 important] top-[0rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-contain"
          width={1920}
          height={1000}
          sizes="100vw"
          alt=""
          src="/espresso-surrounded-by-scattered-coffee-beans-dark-surface-1@2x.png"
        />
      </motion.div>
      <FrameComponent1 />
      <motion.section
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[64.563rem] h-[33rem] flex items-start justify-center pt-[0rem] px-[1.25rem] pb-[3.375rem] box-border max-w-full shrink-0 text-left text-[1.25rem] text-[#fff] font-[Outfit] mq900:pb-[2.188rem] mq900:box-border"
      >
        <div className="w-[34.813rem] flex flex-col items-start gap-[3.5rem] max-w-full mq900:gap-[1.75rem]">
          <div className="self-stretch flex flex-col items-start gap-[3.5rem] mq900:gap-[1.75rem]">
            <div className="self-stretch flex flex-col items-start gap-[1.75rem]">
              <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.2em] uppercase font-medium font-[inherit] mq450:text-[1rem]">
                Welcome
              </h3>
              <h1 className="m-0 self-stretch relative text-[4.5rem] leading-[5.125rem] font-bold font-['Playfair_Display'] mq450:text-[2.688rem] mq450:leading-[3.063rem] mq900:text-[3.625rem] mq900:leading-[4.125rem]">
                We serve the richest coffee in the city!
              </h1>
            </div>
            <div className="w-[26.938rem] relative text-[1.125rem] leading-[1.625rem] inline-block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer [border:none] py-[1rem] px-[2.5rem] bg-[#fff] rounded-[100px] flex items-center justify-center hover:bg-[#e6e6e6] transition-colors"
          >
            <div className="relative text-[1.125rem] font-medium font-[Outfit] text-[#30261c] text-left">
              Order Now
            </div>
          </motion.button>
        </div>
      </motion.section>
      <main className="self-stretch flex flex-col items-start max-w-full shrink-0">
        <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <CategoriesContainer />
        </motion.div>
        
        <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <FrameComponent2 />
        </motion.div>
        
        <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <FrameComponent4 />
        </motion.div>
        
        <section className="self-stretch flex flex-col items-start pt-[0rem] px-[0rem] pb-[4rem] box-border gap-[4rem] max-w-full mq450:pb-[1.688rem] mq450:box-border mq900:gap-[1rem] mq900:pb-[2.625rem] mq900:box-border mq1350:gap-[2rem]">
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full">
            <FrameComponent />
          </motion.div>
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full">
            <FrameComponent3 />
          </motion.div>
        </section>
        
        <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full">
          <FrameComponent5 />
        </motion.div>
        
        <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full">
          <FrameComponent6 />
        </motion.div>
      </main>
    </div>
  );
};

export default WebsitesDesign;
