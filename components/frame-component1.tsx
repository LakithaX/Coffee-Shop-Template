"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

export type FrameComponent1Type = {
  className?: string;
};

const navItems = ["home", "coffee", "bakery", "shop", "about"];

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full shrink-0 ${className}`}
    >
      <header className="w-[90.25rem] flex items-start justify-between gap-[1.25rem] max-w-full text-left text-[2rem] text-[#fff] font-['Playfair_Display']">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start pt-[0.375rem] px-[0rem] pb-[0rem] cursor-pointer"
        >
          <h2 className="m-0 relative text-[length:inherit] lowercase font-bold font-[inherit] z-[1]">
            Coffea
          </h2>
        </motion.div>
        
        <div className="w-[36.063rem] flex flex-col items-start pt-[1.062rem] pb-[0rem] pl-[0rem] pr-[1.625rem] box-border max-w-full mq900:w-[1.625rem]">
          <nav className="m-0 self-stretch flex items-start justify-between gap-[1.25rem] text-left text-[1.125rem] text-[#fff] font-[Poppins] mq900:hidden mq900:gap-[1.25rem]">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#e6e6e6" }}
                whileTap={{ scale: 0.95 }}
                className="relative uppercase font-medium z-[1] cursor-pointer"
              >
                {item}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              whileHover={{ scale: 1.1, color: "#e6e6e6" }}
              whileTap={{ scale: 0.95 }}
              className="relative uppercase font-semibold z-[1] cursor-pointer"
            >
              login
            </motion.div>
          </nav>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ rotate: 15, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer"
        >
          <Image
            className="h-[3.813rem] w-[3.813rem] relative z-[1]"
            loading="lazy"
            width={61}
            height={61}
            sizes="100vw"
            alt="Cart/Menu"
            src="/Group-7.svg"
          />
        </motion.div>
      </header>
    </div>
  );
};

export default FrameComponent1;
