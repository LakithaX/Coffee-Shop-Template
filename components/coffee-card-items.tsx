"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

export type CoffeeCardItemsType = {
  className?: string;
  productImageBackgrounds: string;
};

const CoffeeCardItems: NextPage<CoffeeCardItemsType> = ({
  className = "",
  productImageBackgrounds,
}) => {
  return (
    <motion.section
      whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
      className={`self-stretch flex-1 rounded-[18px] bg-[rgba(226,217,200,0.2)] border-[#e2d9c8] border-solid border-[1.5px] box-border flex flex-col items-start p-[0.875rem] gap-[1rem] max-w-full text-left text-[2.375rem] text-[#30261c] font-[Outfit] ${className}`}
    >
      <div className="w-[20.875rem] h-[22.75rem] relative overflow-hidden rounded-xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
            width={334}
            height={364}
            sizes="100vw"
            alt=""
            src={productImageBackgrounds}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-[1.144rem] left-[17.125rem] w-[2.05rem] h-[2.05rem] z-[1] cursor-pointer"
        >
          <Image
            className="w-full h-full"
            width={32.8}
            height={32.8}
            sizes="100vw"
            alt="Favorite"
            src="/line-md-heart.svg"
          />
        </motion.div>
      </div>
      <div className="self-stretch flex flex-col items-start gap-[0.75rem]">
        <div className="w-[20.875rem] flex flex-col items-start gap-[0.625rem]">
          <h1 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] mq450:text-[1.438rem] mq900:text-[1.875rem]">
            Lungo coffee
          </h1>
          <div className="self-stretch h-[2.938rem] relative text-[1.25rem] leading-[1.75rem] text-[#2a0000] inline-block mq450:text-[1rem] mq450:leading-[1.375rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          </div>
        </div>
        <div className="w-[20.875rem] flex items-center gap-[8.437rem] text-[1.25rem] text-[#2a0000] font-[Poppins] mq450:gap-[4.188rem]">
          <h3 className="m-0 relative text-[length:inherit] leading-[1.875rem] font-semibold font-[inherit] mq450:text-[1rem] mq450:leading-[1.5rem]">
            Rs. 200
          </h3>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#5c3333" }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer [border:none] py-[0.625rem] px-[1.625rem] bg-[#2a0000] rounded-lg flex items-center justify-center transition-colors"
          >
            <div className="relative text-[0.875rem] font-medium font-[Poppins] text-[#fff] text-left">
              Order Now
            </div>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default CoffeeCardItems;
